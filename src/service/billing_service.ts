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
import Stripe from "stripe";
import {users} from "./api";
import {Customer} from "./types";

export class BillingService {
  private static instance: BillingService;

  private readonly stripe: Stripe;

  public constructor(
    private readonly config = {
      secretKey: process.env.STRIPE_SECRET_KEY,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET
    }
  ) {
    if (!this.config.secretKey) {
      throw new Error("Missing Stripe secret key");
    }

    this.stripe = new Stripe(this.config.secretKey, {apiVersion: "2020-08-27"});
  }

  public getPublishableKey(): string {
    return this.config.publishableKey;
  }

  public async upsertCustomer(accessKeyId: string) {
    const user = await users.getUser(accessKeyId);

    if (!user) throw new Error("User not found");

    const customer =
      (await this.getCustomer(accessKeyId)) ||
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

  public async createCustomer(payload: {
    email: string;
    name: string;
    metadata: {
      accessKeyId: string;
    };
  }): Promise<Customer> {
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

  public async getCustomer(accessKeyId: string): Promise<Customer | null> {
    const customer = (
      await this.stripe.customers.search({
        query: `metadata["accessKeyId"]:"${accessKeyId}"`,
        limit: 1,
        expand: ["data.subscriptions"]
      })
    )?.data?.[0];

    if (!customer) return null;

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

  public async listPlans(limit?: number) {
    const prices = await this.stripe.prices.list({
      expand: ["data.product"],
      limit: limit || 100
    });

    return prices.data.map((price) => {
      const product = price.product as Stripe.Product;

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

  public async getPlan(ref: string) {
    const prices = await this.listPlans();

    return prices.find((price) => price.ref === ref);
  }

  public async changePlan(customer: Customer, planRef: string) {
    const plan = await this.getPlan(planRef);

    if (!plan) throw new Error("Plan not found");

    if (!customer) throw new Error("Customer not found");

    let subscription = customer.subscriptions?.[0];

    if (subscription) {
      subscription = await this.stripe.subscriptions.update(subscription.id, {
        items: [
          {
            id: subscription.items.data[0].id,
            price: plan.externalRef
          }
        ]
      });
    } else {
      subscription = await this.stripe.subscriptions.create({
        customer: customer.ref,
        items: [{price: plan.externalRef}],
        payment_behavior: "default_incomplete",
        expand: ["latest_invoice.payment_intent"]
      });
    }

    return {
      subscription,
      plan,
      customer
    };
  }

  public async cancelSubscription(accessKeyId: string) {
    const customer = await this.getCustomer(accessKeyId);

    if (!customer) throw new Error("Customer not found");

    const subscription = customer.subscriptions?.[0];

    if (subscription) {
      await this.stripe.subscriptions.del(subscription.id);
    }
  }

  public async listInvoices(accessKeyId: string, limit?: number) {
    const customer = await this.getCustomer(accessKeyId);

    if (!customer) return [];

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

  public async addPaymentMethod(paymentMethodId: string, customer: Customer) {
    const paymentMethod = await this.stripe.paymentMethods.attach(
      paymentMethodId,
      {
        customer: customer.ref
      }
    );

    const subscription = customer.subscriptions?.[0];

    if (subscription) {
      await this.stripe.subscriptions.update(subscription.id, {
        default_payment_method: paymentMethod.id
      });
    }

    return paymentMethod;
  }

  public async setDefaultPaymentMethod(
    paymentMethodId: string,
    customer: Customer
  ) {
    const paymentMethod = await this.stripe.paymentMethods.retrieve(
      paymentMethodId
    );

    if (!paymentMethod) throw new Error("Payment method not found");

    const subscription = customer.subscriptions?.[0];

    if (!subscription) throw new Error("Subscription not found");

    await this.stripe.subscriptions.update(subscription.id, {
      default_payment_method: paymentMethod.id
    });

    return paymentMethod;
  }

  public async removePaymentMethod(paymentMethodId: string) {
    return this.stripe.paymentMethods.detach(paymentMethodId);
  }

  public async listPaymentMethods(accessKeyId: string, type = "card") {
    const customer = await this.getCustomer(accessKeyId);

    if (!customer) return [];

    if (!type) throw new Error("Missing payment method type");

    const paymentMethods = await this.stripe.customers.listPaymentMethods(
      customer.ref,
      {
        type: type as Stripe.CustomerListPaymentMethodsParams.Type
      }
    );

    return paymentMethods.data.map((paymentMethod) => ({
      ref: paymentMethod.id,
      brand: paymentMethod.card.brand,
      last4: paymentMethod.card.last4,
      expMonth: paymentMethod.card.exp_month,
      expYear: paymentMethod.card.exp_year
    }));
  }

  public createEvent(payload: string | Buffer, signature: string) {
    return this.stripe.webhooks.constructEvent(
      payload,
      signature,
      this.config.webhookSecret
    );
  }

  public getStripe() {
    return this.stripe;
  }

  public static getInstance(): BillingService {
    if (!BillingService.instance) {
      BillingService.instance = new BillingService();
    }

    return BillingService.instance;
  }
}
