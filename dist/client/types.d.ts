import { AddPaymentMethodRequest, AddPaymentMethodResponse, ChangePlanRequest, ChangePlanResponse, GetPlanRequest, GetPlanResponse, GetPublishableKeyRequest, GetPublishableKeyResponse, ListInvoicesRequest, ListInvoicesResponse, ListPaymentMethodRequest, ListPaymentMethodResponse, ListPlansRequest, ListPlansResponse, RemovePaymentMethodRequest, RemovePaymentMethodResponse } from "../protos";
export declare type IGetPublishableKeyRequest = GetPublishableKeyRequest.AsObject;
export declare type IGetPublishableKeyResponse = GetPublishableKeyResponse.AsObject;
export declare type IChangePlanRequest = ChangePlanRequest.AsObject;
export declare type IChangePlanResponse = ChangePlanResponse.AsObject;
export declare type IGetPlanRequest = GetPlanRequest.AsObject;
export declare type IGetPlanResponse = GetPlanResponse.AsObject;
export declare type IListPlansRequest = ListPlansRequest.AsObject;
export declare type IListPlansResponse = ListPlansResponse.AsObject;
export declare type IListPaymentMethodsRequest = ListPaymentMethodRequest.AsObject;
export declare type IListPaymentMethodsResponse = ListPaymentMethodResponse.AsObject;
export declare type IListInvoicesRequest = ListInvoicesRequest.AsObject;
export declare type IListInvoicesResponse = ListInvoicesResponse.AsObject;
export declare type IAddPaymentMethodRequest = AddPaymentMethodRequest.AsObject;
export declare type IAddPaymentMethodResponse = AddPaymentMethodResponse.AsObject;
export declare type IRemovePaymentMethodRequest = RemovePaymentMethodRequest.AsObject;
export declare type IRemovePaymentMethodResponse = RemovePaymentMethodResponse.AsObject;
export interface IAccountManagerClient {
    getPublishableKey(request: IGetPublishableKeyRequest): Promise<IGetPublishableKeyResponse>;
    changePlan(request: IChangePlanRequest): Promise<IChangePlanResponse>;
    getPlan(request: IGetPlanRequest): Promise<IGetPlanResponse>;
    listPlans(request: IListPlansRequest): Promise<IListPlansResponse>;
    listPaymentMethods(request: IListPaymentMethodsRequest): Promise<IListPaymentMethodsResponse>;
    addPaymentMethod(request: IAddPaymentMethodRequest): Promise<IAddPaymentMethodResponse>;
    removePaymentMethod(request: IRemovePaymentMethodRequest): Promise<IRemovePaymentMethodResponse>;
    listInvoices(request: IListInvoicesRequest): Promise<IListInvoicesResponse>;
}
