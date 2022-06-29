"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountManagerServer = void 0;
const core_1 = require("@fonoster/core");
const protos_1 = require("../protos");
const billing_service_1 = require("./billing_service");
class AccountManagerServer {
    getPublishableKey(call, callback) {
        try {
            const publishableKey = billing_service_1.BillingService.getInstance().getPublishableKey();
            const response = new protos_1.GetPublishableKeyResponse()
                .setClientRef(call.request.getClientRef())
                .setPublishableKey(publishableKey);
            callback(null, response);
        }
        catch (error) {
            callback(error, null);
        }
    }
    async changePlan(call, callback) {
        try {
            const accessKeyId = (0, core_1.getAccessKeyId)(call);
            const accessKeySecret = (0, core_1.getAccessKeySecret)(call);
            const planRef = call.request.getPlanRef();
            if (!accessKeyId || !planRef || !accessKeySecret) {
                throw new Error("Missing required parameters");
            }
            const customer = await billing_service_1.BillingService.getInstance().upsertCustomer(accessKeyId, accessKeySecret);
            if (!customer)
                throw new Error("Customer not found");
            const { plan } = await billing_service_1.BillingService.getInstance().changePlan(customer, planRef);
            const response = new protos_1.ChangePlanResponse().setPlan(
            /**
             * @todo Create plan mapper to gRPC
             */
            new protos_1.Plan()
                .setRef(plan.ref)
                .setName(plan.name)
                .setDescription(plan.description)
                .setAmount(plan.amount)
                .setCurrency(plan.currency)
                .setRecurringType(plan.recurringType));
            callback(null, response);
        }
        catch (error) {
            callback(error, null);
        }
    }
    async getPlan(call, callback) {
        try {
            const planRef = call.request.getPlanRef();
            if (!planRef) {
                throw new Error("Missing required parameters");
            }
            const plan = await billing_service_1.BillingService.getInstance().getPlan(planRef);
            if (!plan) {
                throw new Error("Plan not found");
            }
            const response = new protos_1.GetPlanResponse().setPlan(
            /**
             * @todo Create plan mapper to gRPC
             */
            new protos_1.Plan()
                .setRef(plan.ref)
                .setName(plan.name)
                .setDescription(plan.description)
                .setAmount(plan.amount)
                .setCurrency(plan.currency)
                .setRecurringType(plan.recurringType));
            callback(null, response);
        }
        catch (error) {
            callback(error, null);
        }
    }
    async listPlans(call, callback) {
        try {
            const plans = await billing_service_1.BillingService.getInstance().listPlans(call.request.getLimit());
            const response = new protos_1.ListPlansResponse().setPlansList(plans.map((plan) => 
            /**
             * @todo Create plan mapper to gRPC
             */
            new protos_1.Plan()
                .setRef(plan.ref)
                .setName(plan.name)
                .setDescription(plan.description)
                .setAmount(plan.amount)
                .setCurrency(plan.currency)
                .setRecurringType(plan.recurringType)));
            callback(null, response);
        }
        catch (error) {
            callback(error, null);
        }
    }
    async listPaymentMethods(call, callback) {
        try {
            const accessKeyId = (0, core_1.getAccessKeyId)(call);
            const paymentMethodType = call.request.getPaymentType() || undefined;
            if (!accessKeyId) {
                throw new Error("Missing required parameters");
            }
            const methods = await billing_service_1.BillingService.getInstance().listPaymentMethods(accessKeyId, paymentMethodType);
            const response = new protos_1.ListPaymentMethodResponse().setPaymentMethodsList(methods.map((method) => new protos_1.ListPaymentMethodResponse.PaymentMethod()
                .setRef(method.ref)
                .setCardBrand(method.brand)
                .setCardLastFour(method.last4)
                .setCardExpMonth(method.expMonth)
                .setCardExpYear(method.expYear)));
            callback(null, response);
        }
        catch (error) {
            callback(error, null);
        }
    }
    async listInvoices(call, callback) {
        try {
            const accessKeyId = (0, core_1.getAccessKeyId)(call);
            if (!accessKeyId) {
                throw new Error("Missing required parameters");
            }
            const invoices = await billing_service_1.BillingService.getInstance().listInvoices(accessKeyId, call.request.getLimit());
            const response = new protos_1.ListInvoicesResponse().setInvoicesList(invoices.map((invoice) => new protos_1.ListInvoicesResponse.Invoice()
                .setRef(invoice.ref)
                .setCurrency(invoice.currency)
                .setPaidAmount(invoice.amount)
                .setCreatedAt(invoice.createdAt)));
            callback(null, response);
        }
        catch (error) {
            callback(error, null);
        }
    }
}
exports.AccountManagerServer = AccountManagerServer;