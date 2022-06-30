import { APIClient, ClientOptions } from "@fonoster/common";
import { IAccountManagerClient, IAddPaymentMethodRequest, IAddPaymentMethodResponse, IChangePlanRequest, IChangePlanResponse, IGetPlanRequest, IGetPlanResponse, IGetPublishableKeyRequest, IGetPublishableKeyResponse, IListInvoicesRequest, IListInvoicesResponse, IListPaymentMethodsRequest, IListPaymentMethodsResponse, IListPlansRequest, IListPlansResponse, IRemovePaymentMethodRequest, IRemovePaymentMethodResponse } from "./types";
export declare class AccountManager extends APIClient implements IAccountManagerClient {
    /**
     * Constructs a new Apps object.
     *
     * @param {ClientOptions} options - Options to indicate the objects endpoint
     * @see module:core:APIClient
     */
    constructor(options?: ClientOptions);
    getPublishableKey(request?: IGetPublishableKeyRequest): Promise<IGetPublishableKeyResponse>;
    changePlan(request: IChangePlanRequest): Promise<IChangePlanResponse>;
    getPlan(request: IGetPlanRequest): Promise<IGetPlanResponse>;
    listPlans(request: IListPlansRequest): Promise<IListPlansResponse>;
    addPaymentMethod(request: IAddPaymentMethodRequest): Promise<IAddPaymentMethodResponse>;
    removePaymentMethod(request: IRemovePaymentMethodRequest): Promise<IRemovePaymentMethodResponse>;
    listPaymentMethods(request: IListPaymentMethodsRequest): Promise<IListPaymentMethodsResponse>;
    listInvoices(request: IListInvoicesRequest): Promise<IListInvoicesResponse>;
}
