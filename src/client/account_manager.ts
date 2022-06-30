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
import {APIClient, ClientOptions} from "@fonoster/common";
import {
  AccountManagerClient,
  AddPaymentMethodRequest,
  ChangePlanRequest,
  GetPlanRequest,
  GetPublishableKeyRequest,
  ListInvoicesRequest,
  ListPaymentMethodRequest,
  ListPlansRequest,
  RemovePaymentMethodRequest
} from "../protos";
import {
  IAccountManagerClient,
  IAddPaymentMethodRequest,
  IAddPaymentMethodResponse,
  IChangePlanRequest,
  IChangePlanResponse,
  IGetPlanRequest,
  IGetPlanResponse,
  IGetPublishableKeyRequest,
  IGetPublishableKeyResponse,
  IListInvoicesRequest,
  IListInvoicesResponse,
  IListPaymentMethodsRequest,
  IListPaymentMethodsResponse,
  IListPlansRequest,
  IListPlansResponse,
  IRemovePaymentMethodRequest,
  IRemovePaymentMethodResponse
} from "./types";
import * as grpc from "@grpc/grpc-js";

/**
 * Account Manager client
 */
export class AccountManager extends APIClient implements IAccountManagerClient {
  /**
   * Constructs a new Apps object.
   *
   * @param {ClientOptions} options - Options to indicate the objects endpoint
   * @see module:core:APIClient
   */
  constructor(options?: ClientOptions) {
    super(AccountManagerClient, options);

    super.init();

    /**
     * @todo Temporal workaround to allow connection to the server
     */
    this.service = new this.ServiceClient(
      this.options.endpoint || process.env.APISERVER_ENDPOINT,
      grpc.credentials.createInsecure()
    );
  }

  public async getPublishableKey(
    request?: IGetPublishableKeyRequest
  ): Promise<IGetPublishableKeyResponse> {
    const req = new GetPublishableKeyRequest();

    if (request) {
      req.setClientRef(request.clientRef);
    }

    return await new Promise((resolve, reject) => {
      (this.service as AccountManagerClient).getPublishableKey(
        req,
        this.getMeta(),
        (err, res) => {
          if (err) return reject(err);

          resolve(res.toObject());
        }
      );
    });
  }

  public async changePlan(
    request: IChangePlanRequest
  ): Promise<IChangePlanResponse> {
    const req = new ChangePlanRequest();

    req.setPlanRef(request.planRef);

    return await new Promise((resolve, reject) => {
      (this.service as AccountManagerClient).changePlan(
        req,
        this.getMeta(),
        (err, res) => {
          if (err) return reject(err);

          resolve(res.toObject());
        }
      );
    });
  }

  public async getPlan(request: IGetPlanRequest): Promise<IGetPlanResponse> {
    const req = new GetPlanRequest();

    req.setPlanRef(request.planRef);

    return await new Promise((resolve, reject) => {
      (this.service as AccountManagerClient).getPlan(
        req,
        this.getMeta(),
        (err, res) => {
          if (err) return reject(err);

          resolve(res.toObject());
        }
      );
    });
  }

  public async listPlans(
    request: IListPlansRequest
  ): Promise<IListPlansResponse> {
    const req = new ListPlansRequest();

    if (request.limit) {
      req.setLimit(request.limit);
    }

    return await new Promise((resolve, reject) => {
      (this.service as AccountManagerClient).listPlans(
        req,
        this.getMeta(),
        (err, res) => {
          if (err) return reject(err);

          resolve(res.toObject());
        }
      );
    });
  }

  public async addPaymentMethod(
    request: IAddPaymentMethodRequest
  ): Promise<IAddPaymentMethodResponse> {
    if (!request.paymentMethodId) {
      throw new Error("Missing paymentMethodId");
    }

    const req = new AddPaymentMethodRequest().setPaymentMethodId(
      request.paymentMethodId
    );

    return await new Promise((resolve, reject) => {
      (this.service as AccountManagerClient).addPaymentMethod(
        req,
        this.getMeta(),
        (err, res) => {
          if (err) return reject(err);

          resolve(res.toObject());
        }
      );
    });
  }

  public async removePaymentMethod(
    request: IRemovePaymentMethodRequest
  ): Promise<IRemovePaymentMethodResponse> {
    if (!request.paymentMethodId) {
      throw new Error("Missing paymentMethodId");
    }

    const req = new RemovePaymentMethodRequest().setPaymentMethodId(
      request.paymentMethodId
    );

    return await new Promise((resolve, reject) => {
      (this.service as AccountManagerClient).removePaymentMethod(
        req,
        this.getMeta(),
        (err, res) => {
          if (err) return reject(err);

          resolve(res.toObject());
        }
      );
    });
  }

  public async listPaymentMethods(
    request: IListPaymentMethodsRequest
  ): Promise<IListPaymentMethodsResponse> {
    const req = new ListPaymentMethodRequest();

    if (request) {
      req.setPaymentType(request.paymentType);
    }

    return await new Promise((resolve, reject) => {
      (this.service as AccountManagerClient).listPaymentMethods(
        req,
        this.getMeta(),
        (err, res) => {
          if (err) return reject(err);

          resolve(res.toObject());
        }
      );
    });
  }

  public async listInvoices(
    request: IListInvoicesRequest
  ): Promise<IListInvoicesResponse> {
    const req = new ListInvoicesRequest();

    if (request) {
      req.setLimit(request.limit);
    }

    return await new Promise((resolve, reject) => {
      (this.service as AccountManagerClient).listInvoices(
        req,
        this.getMeta(),
        (err, res) => {
          if (err) return reject(err);

          resolve(res.toObject());
        }
      );
    });
  }
}
