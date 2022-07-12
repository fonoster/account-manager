#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const certs_1 = require("@fonoster/certs");
const common_1 = require("@fonoster/common");
const auth_1 = require("@fonoster/auth");
const protos_1 = require("./protos");
const account_manager_1 = require("./service/account_manager");
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("@fonoster/logger"));
const webhook_1 = require("./service/webhook");
common_1.Tracer.init("account-manager-service");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
// TODO: Rename to reflect the service name
app.post("/webhook", express_1.default.raw({ type: "application/json" }), webhook_1.webhook);
app.listen(PORT, () => {
    logger_1.default.info("AccountManager service is running on port " + PORT);
    const services = [
        {
            name: "AccountManager",
            version: "v1beta1",
            service: protos_1.AccountManagerService,
            server: new account_manager_1.AccountManagerServer()
        }
    ];
    const authMiddle = {
        name: "Authentication",
        middlewareObj: new auth_1.AuthMiddleware((0, certs_1.getSalt)()).middleware
    };
    (0, common_1.runServices)(services, [authMiddle]);
});
