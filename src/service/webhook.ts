import {Request, Response} from "express";
import logger from "@fonoster/logger";
import {BillingService} from "./billing_service";

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
export const webhook = async (req: Request, res: Response) => {
  try {
    const signature = req.headers["stripe-signature"] as string;

    const event = BillingService.getInstance().createEvent(req.body, signature);

    /**
     * @todo Fix types
     */
    const data = event.data.object as unknown as any;

    logger.verbose(`Webhook received: ${event.type}`);
    logger.verbose(`Webhook data: ${JSON.stringify(data)}`);

    switch (event.type) {
      case "invoice.payment_succeeded":
        if (data["billing_reason"] === "subscription_create") {
          const subscriptionId = data["subscription"];
          const paymentId = data["payment_intent"];

          const paymentIntent = await BillingService.getInstance()
            .getStripe()
            .paymentIntents.retrieve(paymentId);

          await BillingService.getInstance()
            .getStripe()
            .subscriptions.update(subscriptionId, {
              default_payment_method: paymentIntent.payment_method as string
            });
        }
        break;
    }

    res.send();
  } catch (err) {
    logger.error("Webhook signature verification failed");

    return res.status(400).send({error: "Webhook failed"});
  }
};
