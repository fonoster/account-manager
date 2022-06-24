#!/usr/bin/env node

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
import {runServices, Tracer} from "@fonoster/common";
import {AccountManagerService} from "./protos";
import {AccountManagerServer} from "./service/account_manager";
import express from "express";
import logger from "@fonoster/logger";
import {webhook} from "./service/webhook";

Tracer.init("account-manager-service");

const PORT = process.env.PORT || 3000;

const app = express();

app.post("/webhook", express.raw({type: "application/json"}), webhook);

app.listen(PORT, () => {
  logger.info("AccountManager service is running");

  const services = [
    {
      name: "AccountManager",
      version: "v1beta1",
      service: AccountManagerService,
      server: new AccountManagerServer()
    }
  ];

  runServices(services);
});
