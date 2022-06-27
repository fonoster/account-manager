import type { ServerUnaryCall, ServiceError, UntypedHandleCall } from "@grpc/grpc-js";
import { ChangePlanRequest, ChangePlanResponse, GetPlanRequest, GetPlanResponse, GetPublishableKeyRequest, GetPublishableKeyResponse, IAccountManagerServer, ListInvoicesRequest, ListInvoicesResponse, ListPaymentMethodRequest, ListPaymentMethodResponse, ListPlansRequest, ListPlansResponse } from "../protos";
export interface ICallback<R> {
    (error: ServiceError | null, response: R): void;
}
export declare class AccountManagerServer implements IAccountManagerServer {
    [name: string]: UntypedHandleCall;
    getPublishableKey(call: ServerUnaryCall<GetPublishableKeyRequest, GetPublishableKeyResponse>, callback: ICallback<GetPublishableKeyResponse>): void;
    changePlan(call: ServerUnaryCall<ChangePlanRequest, ChangePlanResponse>, callback: ICallback<ChangePlanResponse>): Promise<void>;
    getPlan(call: ServerUnaryCall<GetPlanRequest, GetPlanResponse>, callback: ICallback<GetPlanResponse>): Promise<void>;
    listPlans(call: ServerUnaryCall<ListPlansRequest, ListPlansResponse>, callback: ICallback<ListPlansResponse>): Promise<void>;
    listPaymentMethods(call: ServerUnaryCall<ListPaymentMethodRequest, ListPaymentMethodResponse>, callback: ICallback<ListPaymentMethodResponse>): Promise<void>;
    listInvoices(call: ServerUnaryCall<ListInvoicesRequest, ListInvoicesResponse>, callback: ICallback<ListInvoicesResponse>): Promise<void>;
}
