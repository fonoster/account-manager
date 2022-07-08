"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
/*
 * Copyright (C) 2022 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster
 *
 * This file is part of account-manager
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stripe_1 = __importDefault(require("stripe"));
const sdk_1 = __importDefault(require("@fonoster/sdk"));
class BillingService {
    constructor(config = {
        secretKey: process.env.STRIPE_SECRET_KEY,
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET
    }) {
        this.config = config;
        if (!this.config.secretKey) {
            throw new Error("Missing Stripe secret key");
        }
        this.stripe = new stripe_1.default(this.config.secretKey, { apiVersion: "2020-08-27" });
    }
    getPublishableKey() {
        return this.config.publishableKey;
    }
    async upsertCustomer(accessKeyId, accessKeySecret) {
        /**
         * @todo Allow tokens with admin or service role to execute this action.
         *
         * Workaround: Users.getUser()
         */
        const user = await new sdk_1.default.Users({
            accessKeyId,
            accessKeySecret
        }).getUser(accessKeyId);
        if (!user)
            throw new Error("User not found");
        const customer = (await this.getCustomer(accessKeyId)) ||
            (await this.createCustomer({
                email: user.email,
                name: user.name,
                metadata: {
                    accessKeyId
                }
            }));
        return {
            customer,
            user
        };
    }
    async createCustomer(payload) {
        const customer = await this.stripe.customers.create(payload);
        /**
         * @todo Create a mapper for the customer
         */
        return {
            ref: customer.id,
            name: customer.name,
            email: customer.email,
            accessKeyId: payload.metadata.accessKeyId,
            subscriptions: customer?.subscriptions?.data
        };
    }
    async getCustomer(accessKeyId) {
        const customer = (await this.stripe.customers.search({
            query: `metadata["accessKeyId"]:"${accessKeyId}"`,
            limit: 1,
            expand: ["data.subscriptions"]
        }))?.data?.[0];
        if (!customer)
            return null;
        /**
         * @todo Create a mapper for the customer
         */
        return {
            ref: customer.id,
            name: customer.name,
            email: customer.email,
            accessKeyId,
            subscriptions: customer?.subscriptions?.data
        };
    }
    async listPlans(limit) {
        const prices = await this.stripe.prices.list({
            expand: ["data.product"],
            limit: limit || 100
        });
        return prices.data.map((price) => {
            const product = price.product;
            /**
             * @todo Create a mapper for the product
             */
            return {
                ref: price.nickname,
                externalRef: price.id,
                name: product.name,
                description: product.description,
                amount: price.unit_amount,
                currency: price.currency,
                recurringType: price.recurring.interval
            };
        });
    }
    async getPlan(ref) {
        const prices = await this.listPlans();
        return prices.find((price) => price.ref === ref);
    }
    async changePlan(customer, planRef, paymentMethodId) {
        const plan = await this.getPlan(planRef);
        if (!plan)
            throw new Error("Plan not found");
        if (!customer)
            throw new Error("Customer not found");
        let subscription = customer.subscriptions?.[0];
        if (subscription) {
            subscription = await this.stripe.subscriptions.update(subscription.id, {
                items: [
                    {
                        id: subscription.items.data[0].id,
                        price: plan.externalRef
                    }
                ],
                default_payment_method: paymentMethodId
            });
        }
        else {
            subscription = await this.stripe.subscriptions.create({
                customer: customer.ref,
                items: [{ price: plan.externalRef }],
                default_payment_method: paymentMethodId,
                expand: ["latest_invoice.payment_intent"]
            });
        }
        return {
            subscription,
            plan,
            customer
        };
    }
    async cancelSubscription(accessKeyId) {
        const customer = await this.getCustomer(accessKeyId);
        if (!customer)
            throw new Error("Customer not found");
        const subscription = customer.subscriptions?.[0];
        if (subscription) {
            await this.stripe.subscriptions.del(subscription.id);
        }
    }
    async listInvoices(accessKeyId, limit) {
        const customer = await this.getCustomer(accessKeyId);
        if (!customer)
            return [];
        const invoices = await this.stripe.invoices.list({
            limit: limit || 12,
            status: "paid",
            customer: customer.ref
        });
        return invoices.data.map((invoice) => ({
            ref: invoice.id,
            amount: invoice.amount_due,
            currency: invoice.currency,
            createdAt: invoice.created
        }));
    }
    async addPaymentMethod(paymentMethodId, customer) {
        const paymentMethod = await this.stripe.paymentMethods.attach(paymentMethodId, {
            customer: customer.ref
        });
        const subscription = customer.subscriptions?.[0];
        if (subscription) {
            await this.stripe.subscriptions.update(subscription.id, {
                default_payment_method: paymentMethod.id
            });
        }
        return paymentMethod;
    }
    async setDefaultPaymentMethod(paymentMethodId, customer) {
        const paymentMethod = await this.stripe.paymentMethods.retrieve(paymentMethodId);
        if (!paymentMethod)
            throw new Error("Payment method not found");
        const subscription = customer.subscriptions?.[0];
        if (!subscription)
            throw new Error("Subscription not found");
        await this.stripe.subscriptions.update(subscription.id, {
            default_payment_method: paymentMethod.id
        });
        return paymentMethod;
    }
    async removePaymentMethod(paymentMethodId) {
        return this.stripe.paymentMethods.detach(paymentMethodId);
    }
    async listPaymentMethods(accessKeyId, type = "card") {
        const customer = await this.getCustomer(accessKeyId);
        if (!customer)
            return [];
        if (!type)
            throw new Error("Missing payment method type");
        const paymentMethods = await this.stripe.customers.listPaymentMethods(customer.ref, {
            type: type
        });
        return paymentMethods.data.map((paymentMethod) => ({
            ref: paymentMethod.id,
            brand: paymentMethod.card.brand,
            last4: paymentMethod.card.last4,
            expMonth: paymentMethod.card.exp_month,
            expYear: paymentMethod.card.exp_year
        }));
    }
    createEvent(payload, signature) {
        return this.stripe.webhooks.constructEvent(payload, signature, this.config.webhookSecret);
    }
    getStripe() {
        return this.stripe;
    }
    static getInstance() {
        if (!BillingService.instance) {
            BillingService.instance = new BillingService();
        }
        return BillingService.instance;
    }
}
exports.BillingService = BillingService;
