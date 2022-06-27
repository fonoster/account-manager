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
    upsertCustomer(accessKeyId: string, accessKeySecret: string): Promise<Customer>;
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
    listPaymentMethods(accessKeyId: string, type?: string): Promise<{
        ref: string;
        brand: string;
        last4: string;
        expMonth: number;
        expYear: number;
    }[]>;
    createEvent(payload: string | Buffer, signature: string): Stripe.Event;
    static getInstance(): BillingService;
}
