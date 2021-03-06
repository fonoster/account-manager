"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountManager = void 0;
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
const common_1 = require("@fonoster/common");
const protos_1 = require("../protos");
// eslint-disable-next-line @typescript-eslint/no-var-requires
class AccountManager extends common_1.APIClient {
    /**
     * Constructs a new Apps object.
     *
     * @param {ClientOptions} options - Options to indicate the objects endpoint
     * @see module:core:APIClient
     */
    constructor(options) {
        super(protos_1.AccountManagerClient, options);
        super.init();
    }
    async getPublishableKey(request) {
        const req = new protos_1.GetPublishableKeyRequest();
        if (request) {
            req.setClientRef(request.clientRef);
        }
        return await new Promise((resolve, reject) => {
            this.service.getPublishableKey(req, this.getMeta(), (err, res) => {
                if (err)
                    return reject(err);
                resolve(res.toObject());
            });
        });
    }
    async changePlan(request) {
        const req = new protos_1.ChangePlanRequest()
            .setPlanRef(request.planRef)
            .setUser(new protos_1.User()
            .setAccessKeyId(request.user.accessKeyId)
            .setAccessKeySecret(request.user.accessKeySecret));
        return await new Promise((resolve, reject) => {
            this.service.changePlan(req, this.getMeta(), (err, res) => {
                if (err)
                    return reject(err);
                resolve(res.toObject());
            });
        });
    }
    async getPlan(request) {
        const req = new protos_1.GetPlanRequest();
        req.setPlanRef(request.planRef);
        return await new Promise((resolve, reject) => {
            this.service.getPlan(req, this.getMeta(), (err, res) => {
                if (err)
                    return reject(err);
                resolve(res.toObject());
            });
        });
    }
    async listPlans(request) {
        const req = new protos_1.ListPlansRequest();
        if (request.limit) {
            req.setLimit(request.limit);
        }
        return await new Promise((resolve, reject) => {
            this.service.listPlans(req, this.getMeta(), (err, res) => {
                if (err)
                    return reject(err);
                resolve(res.toObject());
            });
        });
    }
    async addPaymentMethod(request) {
        if (!request.paymentMethodId) {
            throw new Error("Missing paymentMethodId");
        }
        const req = new protos_1.AddPaymentMethodRequest()
            .setPaymentMethodId(request.paymentMethodId)
            .setUser(new protos_1.User()
            .setAccessKeyId(request.user.accessKeyId)
            .setAccessKeySecret(request.user.accessKeySecret));
        return await new Promise((resolve, reject) => {
            this.service.addPaymentMethod(req, this.getMeta(), (err, res) => {
                if (err)
                    return reject(err);
                resolve(res.toObject());
            });
        });
    }
    async removePaymentMethod(request) {
        if (!request.paymentMethodId) {
            throw new Error("Missing paymentMethodId");
        }
        const req = new protos_1.RemovePaymentMethodRequest()
            .setPaymentMethodId(request.paymentMethodId)
            .setUser(new protos_1.User()
            .setAccessKeyId(request.user.accessKeyId)
            .setAccessKeySecret(request.user.accessKeySecret));
        return await new Promise((resolve, reject) => {
            this.service.removePaymentMethod(req, this.getMeta(), (err, res) => {
                if (err)
                    return reject(err);
                resolve(res.toObject());
            });
        });
    }
    async listPaymentMethods(request) {
        const req = new protos_1.ListPaymentMethodRequest();
        if (request) {
            req.setPaymentType(request.paymentType);
            req.setUser(new protos_1.User()
                .setAccessKeyId(request.user.accessKeyId)
                .setAccessKeySecret(request.user.accessKeySecret));
        }
        return await new Promise((resolve, reject) => {
            this.service.listPaymentMethods(req, this.getMeta(), (err, res) => {
                if (err)
                    return reject(err);
                resolve(res.toObject());
            });
        });
    }
    async listInvoices(request) {
        const req = new protos_1.ListInvoicesRequest();
        if (request) {
            req.setLimit(request.limit);
            req.setUser(new protos_1.User()
                .setAccessKeyId(request.user.accessKeyId)
                .setAccessKeySecret(request.user.accessKeySecret));
        }
        return await new Promise((resolve, reject) => {
            this.service.listInvoices(req, this.getMeta(), (err, res) => {
                if (err)
                    return reject(err);
                resolve(res.toObject());
            });
        });
    }
    async setDefaultPaymentMethod(request) {
        if (!request.paymentMethodId) {
            throw new Error("Missing paymentMethodId");
        }
        const req = new protos_1.SetDefaultPaymentMethodRequest()
            .setPaymentMethodId(request.paymentMethodId)
            .setUser(new protos_1.User()
            .setAccessKeyId(request.user.accessKeyId)
            .setAccessKeySecret(request.user.accessKeySecret));
        return await new Promise((resolve, reject) => {
            this.service.setDefaultPaymentMethod(req, this.getMeta(), (err, res) => {
                if (err)
                    return reject(err);
                resolve(res.toObject());
            });
        });
    }
}
exports.AccountManager = AccountManager;
