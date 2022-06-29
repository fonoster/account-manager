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
import {getAccessKeyId, getAccessKeySecret} from "@fonoster/core";
import type {
  ServerUnaryCall,
  ServiceError,
  UntypedHandleCall
} from "@grpc/grpc-js";
import {
  ChangePlanRequest,
  ChangePlanResponse,
  GetPlanRequest,
  GetPlanResponse,
  GetPublishableKeyRequest,
  GetPublishableKeyResponse,
  IAccountManagerServer,
  ListInvoicesRequest,
  ListInvoicesResponse,
  ListPaymentMethodRequest,
  ListPaymentMethodResponse,
  ListPlansRequest,
  ListPlansResponse,
  Plan
} from "../protos";
import {users} from "./api";
import {BillingService} from "./billing_service";

export interface ICallback<R> {
  (error: ServiceError | null, response: R): void;
}

export class AccountManagerServer implements IAccountManagerServer {
  [name: string]: UntypedHandleCall;

  public getPublishableKey(
    call: ServerUnaryCall<GetPublishableKeyRequest, GetPublishableKeyResponse>,
    callback: ICallback<GetPublishableKeyResponse>
  ) {
    try {
      const publishableKey = BillingService.getInstance().getPublishableKey();

      const response = new GetPublishableKeyResponse()
        .setClientRef(call.request.getClientRef())
        .setPublishableKey(publishableKey);

      callback(null, response);
    } catch (error) {
      callback(error, null);
    }
  }

  public async changePlan(
    call: ServerUnaryCall<ChangePlanRequest, ChangePlanResponse>,
    callback: ICallback<ChangePlanResponse>
  ) {
    try {
      const accessKeyId = getAccessKeyId(call);
      const accessKeySecret = getAccessKeySecret(call);

      const planRef = call.request.getPlanRef();

      if (!accessKeyId || !planRef || !accessKeySecret) {
        throw new Error("Missing required parameters");
      }

      const {customer, user} =
        await BillingService.getInstance().upsertCustomer(accessKeyId);

      if (!customer || !user) throw new Error("Customer not found");

      if (user.status && user.status !== "active") {
        throw new Error(
          `You can't switch plans on a ${user.status.toLowerCase()} account. Please contact support.`
        );
      }

      const {plan} = await BillingService.getInstance().changePlan(
        customer,
        planRef
      );

      if (!plan) throw new Error("Plan not changed");

      await users.updateUser({ref: accessKeyId, limiter: plan.ref});

      const response = new ChangePlanResponse().setPlan(
        /**
         * @todo Create plan mapper to gRPC
         */
        new Plan()
          .setRef(plan.ref)
          .setName(plan.name)
          .setDescription(plan.description)
          .setAmount(plan.amount)
          .setCurrency(plan.currency)
          .setRecurringType(plan.recurringType)
      );

      callback(null, response);
    } catch (error) {
      callback(error, null);
    }
  }

  public async getPlan(
    call: ServerUnaryCall<GetPlanRequest, GetPlanResponse>,
    callback: ICallback<GetPlanResponse>
  ) {
    try {
      const planRef = call.request.getPlanRef();

      if (!planRef) {
        throw new Error("Missing required parameters");
      }

      const plan = await BillingService.getInstance().getPlan(planRef);

      if (!plan) {
        throw new Error("Plan not found");
      }

      const response = new GetPlanResponse().setPlan(
        /**
         * @todo Create plan mapper to gRPC
         */
        new Plan()
          .setRef(plan.ref)
          .setName(plan.name)
          .setDescription(plan.description)
          .setAmount(plan.amount)
          .setCurrency(plan.currency)
          .setRecurringType(plan.recurringType)
      );

      callback(null, response);
    } catch (error) {
      callback(error, null);
    }
  }

  public async listPlans(
    call: ServerUnaryCall<ListPlansRequest, ListPlansResponse>,
    callback: ICallback<ListPlansResponse>
  ) {
    try {
      const plans = await BillingService.getInstance().listPlans(
        call.request.getLimit()
      );

      const response = new ListPlansResponse().setPlansList(
        plans.map((plan) =>
          /**
           * @todo Create plan mapper to gRPC
           */
          new Plan()
            .setRef(plan.ref)
            .setName(plan.name)
            .setDescription(plan.description)
            .setAmount(plan.amount)
            .setCurrency(plan.currency)
            .setRecurringType(plan.recurringType)
        )
      );

      callback(null, response);
    } catch (error) {
      callback(error, null);
    }
  }

  public async listPaymentMethods(
    call: ServerUnaryCall<ListPaymentMethodRequest, ListPaymentMethodResponse>,
    callback: ICallback<ListPaymentMethodResponse>
  ) {
    try {
      const accessKeyId = getAccessKeyId(call);
      const paymentMethodType = call.request.getPaymentType() || undefined;

      if (!accessKeyId) {
        throw new Error("Missing required parameters");
      }

      const methods = await BillingService.getInstance().listPaymentMethods(
        accessKeyId,
        paymentMethodType
      );

      const response = new ListPaymentMethodResponse().setPaymentMethodsList(
        methods.map((method) =>
          new ListPaymentMethodResponse.PaymentMethod()
            .setRef(method.ref)
            .setCardBrand(method.brand)
            .setCardLastFour(method.last4)
            .setCardExpMonth(method.expMonth)
            .setCardExpYear(method.expYear)
        )
      );

      callback(null, response);
    } catch (error) {
      callback(error, null);
    }
  }

  public async listInvoices(
    call: ServerUnaryCall<ListInvoicesRequest, ListInvoicesResponse>,
    callback: ICallback<ListInvoicesResponse>
  ) {
    try {
      const accessKeyId = getAccessKeyId(call);

      if (!accessKeyId) {
        throw new Error("Missing required parameters");
      }

      const invoices = await BillingService.getInstance().listInvoices(
        accessKeyId,
        call.request.getLimit()
      );

      const response = new ListInvoicesResponse().setInvoicesList(
        invoices.map((invoice) =>
          new ListInvoicesResponse.Invoice()
            .setRef(invoice.ref)
            .setCurrency(invoice.currency)
            .setPaidAmount(invoice.amount)
            .setCreatedAt(invoice.createdAt)
        )
      );

      callback(null, response);
    } catch (error) {
      callback(error, null);
    }
  }
}
