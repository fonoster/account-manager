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
import {
  AddPaymentMethodRequest,
  AddPaymentMethodResponse,
  ChangePlanRequest,
  ChangePlanResponse,
  GetPlanRequest,
  GetPlanResponse,
  GetPublishableKeyRequest,
  GetPublishableKeyResponse,
  ListInvoicesRequest,
  ListInvoicesResponse,
  ListPaymentMethodRequest,
  ListPaymentMethodResponse,
  ListPlansRequest,
  ListPlansResponse,
  RemovePaymentMethodRequest,
  RemovePaymentMethodResponse
} from "../protos";

export type IGetPublishableKeyRequest = GetPublishableKeyRequest.AsObject;
export type IGetPublishableKeyResponse = GetPublishableKeyResponse.AsObject;

export type IChangePlanRequest = ChangePlanRequest.AsObject;
export type IChangePlanResponse = ChangePlanResponse.AsObject;

export type IGetPlanRequest = GetPlanRequest.AsObject;
export type IGetPlanResponse = GetPlanResponse.AsObject;

export type IListPlansRequest = ListPlansRequest.AsObject;
export type IListPlansResponse = ListPlansResponse.AsObject;

export type IListPaymentMethodsRequest = ListPaymentMethodRequest.AsObject;
export type IListPaymentMethodsResponse = ListPaymentMethodResponse.AsObject;

export type IListInvoicesRequest = ListInvoicesRequest.AsObject;
export type IListInvoicesResponse = ListInvoicesResponse.AsObject;

export type IAddPaymentMethodRequest = AddPaymentMethodRequest.AsObject;
export type IAddPaymentMethodResponse = AddPaymentMethodResponse.AsObject;

export type IRemovePaymentMethodRequest = RemovePaymentMethodRequest.AsObject;
export type IRemovePaymentMethodResponse = RemovePaymentMethodResponse.AsObject;

export interface IAccountManagerClient {
  getPublishableKey(
    request: IGetPublishableKeyRequest
  ): Promise<IGetPublishableKeyResponse>;
  changePlan(request: IChangePlanRequest): Promise<IChangePlanResponse>;
  getPlan(request: IGetPlanRequest): Promise<IGetPlanResponse>;
  listPlans(request: IListPlansRequest): Promise<IListPlansResponse>;
  listPaymentMethods(
    request: IListPaymentMethodsRequest
  ): Promise<IListPaymentMethodsResponse>;
  addPaymentMethod(
    request: IAddPaymentMethodRequest
  ): Promise<IAddPaymentMethodResponse>;
  removePaymentMethod(
    request: IRemovePaymentMethodRequest
  ): Promise<IRemovePaymentMethodResponse>;
  listInvoices(request: IListInvoicesRequest): Promise<IListInvoicesResponse>;
}
