// package: fonoster.account_manager.v1beta1
// file: account_manager.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as account_manager_pb from "./account_manager_pb";

interface IAccountManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPublishableKey: IAccountManagerService_IGetPublishableKey;
    changePlan: IAccountManagerService_IChangePlan;
    getPlan: IAccountManagerService_IGetPlan;
    listPlans: IAccountManagerService_IListPlans;
    addPaymentMethod: IAccountManagerService_IAddPaymentMethod;
    removePaymentMethod: IAccountManagerService_IRemovePaymentMethod;
    listPaymentMethods: IAccountManagerService_IListPaymentMethods;
    listInvoices: IAccountManagerService_IListInvoices;
}

interface IAccountManagerService_IGetPublishableKey extends grpc.MethodDefinition<account_manager_pb.GetPublishableKeyRequest, account_manager_pb.GetPublishableKeyResponse> {
    path: "/fonoster.account_manager.v1beta1.AccountManager/GetPublishableKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_manager_pb.GetPublishableKeyRequest>;
    requestDeserialize: grpc.deserialize<account_manager_pb.GetPublishableKeyRequest>;
    responseSerialize: grpc.serialize<account_manager_pb.GetPublishableKeyResponse>;
    responseDeserialize: grpc.deserialize<account_manager_pb.GetPublishableKeyResponse>;
}
interface IAccountManagerService_IChangePlan extends grpc.MethodDefinition<account_manager_pb.ChangePlanRequest, account_manager_pb.ChangePlanResponse> {
    path: "/fonoster.account_manager.v1beta1.AccountManager/ChangePlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_manager_pb.ChangePlanRequest>;
    requestDeserialize: grpc.deserialize<account_manager_pb.ChangePlanRequest>;
    responseSerialize: grpc.serialize<account_manager_pb.ChangePlanResponse>;
    responseDeserialize: grpc.deserialize<account_manager_pb.ChangePlanResponse>;
}
interface IAccountManagerService_IGetPlan extends grpc.MethodDefinition<account_manager_pb.GetPlanRequest, account_manager_pb.GetPlanResponse> {
    path: "/fonoster.account_manager.v1beta1.AccountManager/GetPlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_manager_pb.GetPlanRequest>;
    requestDeserialize: grpc.deserialize<account_manager_pb.GetPlanRequest>;
    responseSerialize: grpc.serialize<account_manager_pb.GetPlanResponse>;
    responseDeserialize: grpc.deserialize<account_manager_pb.GetPlanResponse>;
}
interface IAccountManagerService_IListPlans extends grpc.MethodDefinition<account_manager_pb.ListPlansRequest, account_manager_pb.ListPlansResponse> {
    path: "/fonoster.account_manager.v1beta1.AccountManager/ListPlans";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_manager_pb.ListPlansRequest>;
    requestDeserialize: grpc.deserialize<account_manager_pb.ListPlansRequest>;
    responseSerialize: grpc.serialize<account_manager_pb.ListPlansResponse>;
    responseDeserialize: grpc.deserialize<account_manager_pb.ListPlansResponse>;
}
interface IAccountManagerService_IAddPaymentMethod extends grpc.MethodDefinition<account_manager_pb.AddPaymentMethodRequest, account_manager_pb.AddPaymentMethodResponse> {
    path: "/fonoster.account_manager.v1beta1.AccountManager/AddPaymentMethod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_manager_pb.AddPaymentMethodRequest>;
    requestDeserialize: grpc.deserialize<account_manager_pb.AddPaymentMethodRequest>;
    responseSerialize: grpc.serialize<account_manager_pb.AddPaymentMethodResponse>;
    responseDeserialize: grpc.deserialize<account_manager_pb.AddPaymentMethodResponse>;
}
interface IAccountManagerService_IRemovePaymentMethod extends grpc.MethodDefinition<account_manager_pb.RemovePaymentMethodRequest, account_manager_pb.RemovePaymentMethodResponse> {
    path: "/fonoster.account_manager.v1beta1.AccountManager/RemovePaymentMethod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_manager_pb.RemovePaymentMethodRequest>;
    requestDeserialize: grpc.deserialize<account_manager_pb.RemovePaymentMethodRequest>;
    responseSerialize: grpc.serialize<account_manager_pb.RemovePaymentMethodResponse>;
    responseDeserialize: grpc.deserialize<account_manager_pb.RemovePaymentMethodResponse>;
}
interface IAccountManagerService_IListPaymentMethods extends grpc.MethodDefinition<account_manager_pb.ListPaymentMethodRequest, account_manager_pb.ListPaymentMethodResponse> {
    path: "/fonoster.account_manager.v1beta1.AccountManager/ListPaymentMethods";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_manager_pb.ListPaymentMethodRequest>;
    requestDeserialize: grpc.deserialize<account_manager_pb.ListPaymentMethodRequest>;
    responseSerialize: grpc.serialize<account_manager_pb.ListPaymentMethodResponse>;
    responseDeserialize: grpc.deserialize<account_manager_pb.ListPaymentMethodResponse>;
}
interface IAccountManagerService_IListInvoices extends grpc.MethodDefinition<account_manager_pb.ListInvoicesRequest, account_manager_pb.ListInvoicesResponse> {
    path: "/fonoster.account_manager.v1beta1.AccountManager/ListInvoices";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_manager_pb.ListInvoicesRequest>;
    requestDeserialize: grpc.deserialize<account_manager_pb.ListInvoicesRequest>;
    responseSerialize: grpc.serialize<account_manager_pb.ListInvoicesResponse>;
    responseDeserialize: grpc.deserialize<account_manager_pb.ListInvoicesResponse>;
}

export const AccountManagerService: IAccountManagerService;

export interface IAccountManagerServer extends grpc.UntypedServiceImplementation {
    getPublishableKey: grpc.handleUnaryCall<account_manager_pb.GetPublishableKeyRequest, account_manager_pb.GetPublishableKeyResponse>;
    changePlan: grpc.handleUnaryCall<account_manager_pb.ChangePlanRequest, account_manager_pb.ChangePlanResponse>;
    getPlan: grpc.handleUnaryCall<account_manager_pb.GetPlanRequest, account_manager_pb.GetPlanResponse>;
    listPlans: grpc.handleUnaryCall<account_manager_pb.ListPlansRequest, account_manager_pb.ListPlansResponse>;
    addPaymentMethod: grpc.handleUnaryCall<account_manager_pb.AddPaymentMethodRequest, account_manager_pb.AddPaymentMethodResponse>;
    removePaymentMethod: grpc.handleUnaryCall<account_manager_pb.RemovePaymentMethodRequest, account_manager_pb.RemovePaymentMethodResponse>;
    listPaymentMethods: grpc.handleUnaryCall<account_manager_pb.ListPaymentMethodRequest, account_manager_pb.ListPaymentMethodResponse>;
    listInvoices: grpc.handleUnaryCall<account_manager_pb.ListInvoicesRequest, account_manager_pb.ListInvoicesResponse>;
}

export interface IAccountManagerClient {
    getPublishableKey(request: account_manager_pb.GetPublishableKeyRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPublishableKeyResponse) => void): grpc.ClientUnaryCall;
    getPublishableKey(request: account_manager_pb.GetPublishableKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPublishableKeyResponse) => void): grpc.ClientUnaryCall;
    getPublishableKey(request: account_manager_pb.GetPublishableKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPublishableKeyResponse) => void): grpc.ClientUnaryCall;
    changePlan(request: account_manager_pb.ChangePlanRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ChangePlanResponse) => void): grpc.ClientUnaryCall;
    changePlan(request: account_manager_pb.ChangePlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ChangePlanResponse) => void): grpc.ClientUnaryCall;
    changePlan(request: account_manager_pb.ChangePlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ChangePlanResponse) => void): grpc.ClientUnaryCall;
    getPlan(request: account_manager_pb.GetPlanRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    getPlan(request: account_manager_pb.GetPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    getPlan(request: account_manager_pb.GetPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    listPlans(request: account_manager_pb.ListPlansRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPlansResponse) => void): grpc.ClientUnaryCall;
    listPlans(request: account_manager_pb.ListPlansRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPlansResponse) => void): grpc.ClientUnaryCall;
    listPlans(request: account_manager_pb.ListPlansRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPlansResponse) => void): grpc.ClientUnaryCall;
    addPaymentMethod(request: account_manager_pb.AddPaymentMethodRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.AddPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    addPaymentMethod(request: account_manager_pb.AddPaymentMethodRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.AddPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    addPaymentMethod(request: account_manager_pb.AddPaymentMethodRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.AddPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    removePaymentMethod(request: account_manager_pb.RemovePaymentMethodRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.RemovePaymentMethodResponse) => void): grpc.ClientUnaryCall;
    removePaymentMethod(request: account_manager_pb.RemovePaymentMethodRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.RemovePaymentMethodResponse) => void): grpc.ClientUnaryCall;
    removePaymentMethod(request: account_manager_pb.RemovePaymentMethodRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.RemovePaymentMethodResponse) => void): grpc.ClientUnaryCall;
    listPaymentMethods(request: account_manager_pb.ListPaymentMethodRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    listPaymentMethods(request: account_manager_pb.ListPaymentMethodRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    listPaymentMethods(request: account_manager_pb.ListPaymentMethodRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    listInvoices(request: account_manager_pb.ListInvoicesRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListInvoicesResponse) => void): grpc.ClientUnaryCall;
    listInvoices(request: account_manager_pb.ListInvoicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListInvoicesResponse) => void): grpc.ClientUnaryCall;
    listInvoices(request: account_manager_pb.ListInvoicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListInvoicesResponse) => void): grpc.ClientUnaryCall;
}

export class AccountManagerClient extends grpc.Client implements IAccountManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getPublishableKey(request: account_manager_pb.GetPublishableKeyRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPublishableKeyResponse) => void): grpc.ClientUnaryCall;
    public getPublishableKey(request: account_manager_pb.GetPublishableKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPublishableKeyResponse) => void): grpc.ClientUnaryCall;
    public getPublishableKey(request: account_manager_pb.GetPublishableKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPublishableKeyResponse) => void): grpc.ClientUnaryCall;
    public changePlan(request: account_manager_pb.ChangePlanRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ChangePlanResponse) => void): grpc.ClientUnaryCall;
    public changePlan(request: account_manager_pb.ChangePlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ChangePlanResponse) => void): grpc.ClientUnaryCall;
    public changePlan(request: account_manager_pb.ChangePlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ChangePlanResponse) => void): grpc.ClientUnaryCall;
    public getPlan(request: account_manager_pb.GetPlanRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    public getPlan(request: account_manager_pb.GetPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    public getPlan(request: account_manager_pb.GetPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    public listPlans(request: account_manager_pb.ListPlansRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPlansResponse) => void): grpc.ClientUnaryCall;
    public listPlans(request: account_manager_pb.ListPlansRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPlansResponse) => void): grpc.ClientUnaryCall;
    public listPlans(request: account_manager_pb.ListPlansRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPlansResponse) => void): grpc.ClientUnaryCall;
    public addPaymentMethod(request: account_manager_pb.AddPaymentMethodRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.AddPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    public addPaymentMethod(request: account_manager_pb.AddPaymentMethodRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.AddPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    public addPaymentMethod(request: account_manager_pb.AddPaymentMethodRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.AddPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    public removePaymentMethod(request: account_manager_pb.RemovePaymentMethodRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.RemovePaymentMethodResponse) => void): grpc.ClientUnaryCall;
    public removePaymentMethod(request: account_manager_pb.RemovePaymentMethodRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.RemovePaymentMethodResponse) => void): grpc.ClientUnaryCall;
    public removePaymentMethod(request: account_manager_pb.RemovePaymentMethodRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.RemovePaymentMethodResponse) => void): grpc.ClientUnaryCall;
    public listPaymentMethods(request: account_manager_pb.ListPaymentMethodRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    public listPaymentMethods(request: account_manager_pb.ListPaymentMethodRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    public listPaymentMethods(request: account_manager_pb.ListPaymentMethodRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListPaymentMethodResponse) => void): grpc.ClientUnaryCall;
    public listInvoices(request: account_manager_pb.ListInvoicesRequest, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListInvoicesResponse) => void): grpc.ClientUnaryCall;
    public listInvoices(request: account_manager_pb.ListInvoicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListInvoicesResponse) => void): grpc.ClientUnaryCall;
    public listInvoices(request: account_manager_pb.ListInvoicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_manager_pb.ListInvoicesResponse) => void): grpc.ClientUnaryCall;
}
