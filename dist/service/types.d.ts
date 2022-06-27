import type Stripe from "stripe";
export interface Customer {
    ref: string;
    name: string;
    email: string;
    accessKeyId: string;
    subscriptions: Stripe.ApiList<Stripe.Subscription>["data"];
}
