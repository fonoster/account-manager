"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountManagerServer = void 0;
const protos_1 = require("../protos");
const api_1 = require("./api");
const billing_service_1 = require("./billing_service");
const getUserLogged_1 = require("./getUserLogged");
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
    async addPaymentMethod(call, callback) {
        try {
            const { accessKeyId, accessKeySecret } = (0, getUserLogged_1.getUserLogged)(call);
            const paymentMethodId = call.request.getPaymentMethodId();
            if (!accessKeyId || !paymentMethodId || !accessKeySecret) {
                throw new Error("Missing required parameters");
            }
            const { customer } = await billing_service_1.BillingService.getInstance().upsertCustomer(accessKeyId, accessKeySecret);
            if (!customer)
                throw new Error("Customer not found");
            const paymentMethod = await billing_service_1.BillingService.getInstance().addPaymentMethod(paymentMethodId, customer);
            if (!paymentMethod)
                throw new Error("Payment method not added");
            const response = new protos_1.AddPaymentMethodResponse().setPaymentMethod(new protos_1.PaymentMethod()
                .setRef(paymentMethod.id)
                .setCardBrand(paymentMethod.card.brand)
                .setCardLastFour(paymentMethod.card.last4)
                .setCardExpMonth(paymentMethod.card.exp_month)
                .setCardExpYear(paymentMethod.card.exp_year));
            callback(null, response);
        }
        catch (error) {
            callback(error, null);
        }
    }
    async removePaymentMethod(call, callback) {
        try {
            const { accessKeyId, accessKeySecret } = (0, getUserLogged_1.getUserLogged)(call);
            const paymentMethodId = call.request.getPaymentMethodId();
            if (!accessKeyId || !paymentMethodId) {
                throw new Error("Missing required parameters");
            }
            const { customer, user } = await billing_service_1.BillingService.getInstance().upsertCustomer(accessKeyId, accessKeySecret);
            if (!customer)
                throw new Error("Customer not found");
            const paymentMethods = await billing_service_1.BillingService.getInstance().listPaymentMethods(accessKeyId);
            if (paymentMethods.length === 1 && user.limiter !== "starter") {
                throw new Error("You can't delete your only payment method. Add another payment option and then remove this one, or change your plan to starter first.");
            }
            const paymentMethod = await billing_service_1.BillingService.getInstance().removePaymentMethod(paymentMethodId);
            if (!paymentMethod)
                throw new Error("Payment method not removed");
            const response = new protos_1.RemovePaymentMethodResponse().setSuccess(true);
            callback(null, response);
        }
        catch (error) {
            callback(error, null);
        }
    }
    async setDefaultPaymentMethod(call, callback) {
        try {
            const { accessKeyId } = (0, getUserLogged_1.getUserLogged)(call);
            const paymentMethodId = call.request.getPaymentMethodId();
            if (!accessKeyId || !paymentMethodId) {
                throw new Error("Missing required parameters");
            }
            const customer = await billing_service_1.BillingService.getInstance().getCustomer(accessKeyId);
            if (!customer)
                throw new Error("Customer not found");
            const paymentMethod = await billing_service_1.BillingService.getInstance().setDefaultPaymentMethod(paymentMethodId, customer);
            if (!paymentMethod)
                throw new Error("Payment method not set");
            const response = new protos_1.SetDefaultPaymentMethodResponse().setSuccess(true);
            callback(null, response);
        }
        catch (error) {
            callback(error, null);
        }
    }
    async changePlan(call, callback) {
        try {
            const { accessKeyId, accessKeySecret } = (0, getUserLogged_1.getUserLogged)(call);
            const planRef = call.request.getPlanRef();
            if (!accessKeyId || !planRef || !accessKeySecret) {
                throw new Error("Missing required parameters");
            }
            const { customer, user } = await billing_service_1.BillingService.getInstance().upsertCustomer(accessKeyId, accessKeySecret);
            if (!customer || !user)
                throw new Error("Customer not found");
            if (user.status && user.status !== "active") {
                throw new Error(`You can't switch plans on a ${user.status.toLowerCase()} account. Please contact support.`);
            }
            const paymentMethods = await billing_service_1.BillingService.getInstance().listPaymentMethods(accessKeyId);
            if (planRef !== "starter") {
                if (!paymentMethods || !paymentMethods?.length) {
                    throw new Error("Oops, you don't have any payment methods. Please add one to continue.");
                }
            }
            const { plan } = await billing_service_1.BillingService.getInstance().changePlan(customer, planRef, paymentMethods?.[0]?.ref);
            if (!plan)
                throw new Error("Plan not changed");
            await api_1.users.updateUser({ ref: accessKeyId, limiter: plan.ref });
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
            const { accessKeyId } = (0, getUserLogged_1.getUserLogged)(call);
            const paymentMethodType = call.request.getPaymentType() || undefined;
            if (!accessKeyId) {
                throw new Error("Missing required parameters");
            }
            const methods = await billing_service_1.BillingService.getInstance().listPaymentMethods(accessKeyId, paymentMethodType);
            const response = new protos_1.ListPaymentMethodResponse().setPaymentMethodsList(methods.map((method) => new protos_1.PaymentMethod()
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
            const { accessKeyId } = (0, getUserLogged_1.getUserLogged)(call);
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
