"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook = void 0;
const logger_1 = __importDefault(require("@fonoster/logger"));
const billing_service_1 = require("./billing_service");
const webhook = async (req, res) => {
    try {
        const signature = req.headers["stripe-signature"];
        const event = billing_service_1.BillingService.getInstance().createEvent(req.body, signature);
        /**
         * @todo Fix types
         */
        const data = event.data.object;
        logger_1.default.verbose(`Webhook received: ${event.type}`);
        logger_1.default.verbose(`Webhook data: ${JSON.stringify(data)}`);
        if (event.type === "payment_method.attached") {
            const customerId = data["customer"];
            const subscription = (await billing_service_1.BillingService.getInstance().getStripe().subscriptions.list({
                customer: customerId,
                limit: 1
            }))?.data?.[0];
            if (subscription) {
                await billing_service_1.BillingService.getInstance()
                    .getStripe()
                    .subscriptions.update(subscription.id, {
                    default_payment_method: data["id"]
                });
            }
        }
        res.send();
    }
    catch (err) {
        logger_1.default.error("Webhook signature verification failed");
        return res.status(400).send({ error: "Webhook failed" });
    }
};
exports.webhook = webhook;
