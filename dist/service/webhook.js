"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook = void 0;
const logger_1 = __importDefault(require("@fonoster/logger"));
const billing_service_1 = require("./billing_service");
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
const webhook = async (req, res) => {
    try {
        const signature = req.headers["stripe-signature"];
        const event = billing_service_1.BillingService.getInstance().createEvent(req.body, signature);
        const data = event.data.object;
        logger_1.default.info(`Webhook received: ${event.type}`);
        logger_1.default.info(`Webhook data: ${JSON.stringify(data)}`);
        /**
         * @todo: Handle webhook events
         */
        res.send();
    }
    catch (err) {
        logger_1.default.error("Webhook signature verification failed");
        return res.status(400).send({ error: "Webhook failed" });
    }
};
exports.webhook = webhook;
