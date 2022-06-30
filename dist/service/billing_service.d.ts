/// <reference types="node" />
import Stripe from "stripe";
import { Customer } from "./types";
export declare class BillingService {
    private readonly config;
    private static instance;
    private readonly stripe;
    constructor(config?: {
        secretKey: string;
        publishableKey: string;
        webhookSecret: string;
    });
    getPublishableKey(): string;
    upsertCustomer(accessKeyId: string): Promise<{
        customer: Customer;
        user: import("@fonoster/users/dist/client/types").GetUserResponse;
    }>;
    createCustomer(payload: {
        email: string;
        name: string;
        metadata: {
            accessKeyId: string;
        };
    }): Promise<Customer>;
    getCustomer(accessKeyId: string): Promise<Customer | null>;
    listPlans(limit?: number): Promise<{
        ref: string;
        externalRef: string;
        name: string;
        description: string;
        amount: number;
        currency: string;
        recurringType: Stripe.Price.Recurring.Interval;
    }[]>;
    getPlan(ref: string): Promise<{
        ref: string;
        externalRef: string;
        name: string;
        description: string;
        amount: number;
        currency: string;
        recurringType: Stripe.Price.Recurring.Interval;
    }>;
    changePlan(customer: Customer, planRef: string): Promise<{
        subscription: Stripe.Subscription;
        plan: {
            ref: string;
            externalRef: string;
            name: string;
            description: string;
            amount: number;
            currency: string;
            recurringType: Stripe.Price.Recurring.Interval;
        };
        customer: Customer;
    }>;
    cancelSubscription(accessKeyId: string): Promise<void>;
    listInvoices(accessKeyId: string, limit?: number): Promise<{
        ref: string;
        amount: number;
        currency: string;
        createdAt: number;
    }[]>;
    addPaymentMethod(paymentMethodId: string, customer: Customer): Promise<Stripe.Response<Stripe.PaymentMethod>>;
    setDefaultPaymentMethod(paymentMethodId: string, customer: Customer): Promise<Stripe.Response<Stripe.PaymentMethod>>;
    removePaymentMethod(paymentMethodId: string): Promise<Stripe.Response<Stripe.PaymentMethod>>;
    listPaymentMethods(accessKeyId: string, type?: string): Promise<{
        ref: string;
        brand: string;
        last4: string;
        expMonth: number;
        expYear: number;
    }[]>;
    createEvent(payload: string | Buffer, signature: string): Stripe.Event;
    getStripe(): Stripe;
    static getInstance(): BillingService;
}
