// package: fonoster.account_manager.v1beta1
// file: account_manager.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Plan extends jspb.Message { 
    getRef(): string;
    setRef(value: string): Plan;
    getName(): string;
    setName(value: string): Plan;
    getDescription(): string;
    setDescription(value: string): Plan;
    getAmount(): number;
    setAmount(value: number): Plan;
    getCurrency(): string;
    setCurrency(value: string): Plan;
    getRecurringType(): string;
    setRecurringType(value: string): Plan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Plan.AsObject;
    static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Plan;
    static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
}

export namespace Plan {
    export type AsObject = {
        ref: string,
        name: string,
        description: string,
        amount: number,
        currency: string,
        recurringType: string,
    }
}

export class PaymentMethod extends jspb.Message { 
    getRef(): string;
    setRef(value: string): PaymentMethod;
    getCardBrand(): string;
    setCardBrand(value: string): PaymentMethod;
    getCardLastFour(): string;
    setCardLastFour(value: string): PaymentMethod;
    getCardExpMonth(): number;
    setCardExpMonth(value: number): PaymentMethod;
    getCardExpYear(): number;
    setCardExpYear(value: number): PaymentMethod;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaymentMethod.AsObject;
    static toObject(includeInstance: boolean, msg: PaymentMethod): PaymentMethod.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaymentMethod, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaymentMethod;
    static deserializeBinaryFromReader(message: PaymentMethod, reader: jspb.BinaryReader): PaymentMethod;
}

export namespace PaymentMethod {
    export type AsObject = {
        ref: string,
        cardBrand: string,
        cardLastFour: string,
        cardExpMonth: number,
        cardExpYear: number,
    }
}

export class ChangePlanRequest extends jspb.Message { 
    getPlanRef(): string;
    setPlanRef(value: string): ChangePlanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangePlanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangePlanRequest): ChangePlanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangePlanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangePlanRequest;
    static deserializeBinaryFromReader(message: ChangePlanRequest, reader: jspb.BinaryReader): ChangePlanRequest;
}

export namespace ChangePlanRequest {
    export type AsObject = {
        planRef: string,
    }
}

export class ChangePlanResponse extends jspb.Message { 

    hasPlan(): boolean;
    clearPlan(): void;
    getPlan(): Plan | undefined;
    setPlan(value?: Plan): ChangePlanResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangePlanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChangePlanResponse): ChangePlanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangePlanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangePlanResponse;
    static deserializeBinaryFromReader(message: ChangePlanResponse, reader: jspb.BinaryReader): ChangePlanResponse;
}

export namespace ChangePlanResponse {
    export type AsObject = {
        plan?: Plan.AsObject,
    }
}

export class GetPlanRequest extends jspb.Message { 
    getPlanRef(): string;
    setPlanRef(value: string): GetPlanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlanRequest): GetPlanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlanRequest;
    static deserializeBinaryFromReader(message: GetPlanRequest, reader: jspb.BinaryReader): GetPlanRequest;
}

export namespace GetPlanRequest {
    export type AsObject = {
        planRef: string,
    }
}

export class GetPlanResponse extends jspb.Message { 

    hasPlan(): boolean;
    clearPlan(): void;
    getPlan(): Plan | undefined;
    setPlan(value?: Plan): GetPlanResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlanResponse): GetPlanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlanResponse;
    static deserializeBinaryFromReader(message: GetPlanResponse, reader: jspb.BinaryReader): GetPlanResponse;
}

export namespace GetPlanResponse {
    export type AsObject = {
        plan?: Plan.AsObject,
    }
}

export class ListPlansRequest extends jspb.Message { 

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): number | undefined;
    setLimit(value: number): ListPlansRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlansRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlansRequest): ListPlansRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlansRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlansRequest;
    static deserializeBinaryFromReader(message: ListPlansRequest, reader: jspb.BinaryReader): ListPlansRequest;
}

export namespace ListPlansRequest {
    export type AsObject = {
        limit?: number,
    }
}

export class ListPlansResponse extends jspb.Message { 
    clearPlansList(): void;
    getPlansList(): Array<Plan>;
    setPlansList(value: Array<Plan>): ListPlansResponse;
    addPlans(value?: Plan, index?: number): Plan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlansResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlansResponse): ListPlansResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlansResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlansResponse;
    static deserializeBinaryFromReader(message: ListPlansResponse, reader: jspb.BinaryReader): ListPlansResponse;
}

export namespace ListPlansResponse {
    export type AsObject = {
        plansList: Array<Plan.AsObject>,
    }
}

export class ListPaymentMethodRequest extends jspb.Message { 

    hasPaymentType(): boolean;
    clearPaymentType(): void;
    getPaymentType(): string | undefined;
    setPaymentType(value: string): ListPaymentMethodRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPaymentMethodRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPaymentMethodRequest): ListPaymentMethodRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPaymentMethodRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPaymentMethodRequest;
    static deserializeBinaryFromReader(message: ListPaymentMethodRequest, reader: jspb.BinaryReader): ListPaymentMethodRequest;
}

export namespace ListPaymentMethodRequest {
    export type AsObject = {
        paymentType?: string,
    }
}

export class ListPaymentMethodResponse extends jspb.Message { 
    clearPaymentMethodsList(): void;
    getPaymentMethodsList(): Array<PaymentMethod>;
    setPaymentMethodsList(value: Array<PaymentMethod>): ListPaymentMethodResponse;
    addPaymentMethods(value?: PaymentMethod, index?: number): PaymentMethod;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPaymentMethodResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPaymentMethodResponse): ListPaymentMethodResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPaymentMethodResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPaymentMethodResponse;
    static deserializeBinaryFromReader(message: ListPaymentMethodResponse, reader: jspb.BinaryReader): ListPaymentMethodResponse;
}

export namespace ListPaymentMethodResponse {
    export type AsObject = {
        paymentMethodsList: Array<PaymentMethod.AsObject>,
    }
}

export class ListInvoicesRequest extends jspb.Message { 

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): number | undefined;
    setLimit(value: number): ListInvoicesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInvoicesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInvoicesRequest): ListInvoicesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInvoicesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInvoicesRequest;
    static deserializeBinaryFromReader(message: ListInvoicesRequest, reader: jspb.BinaryReader): ListInvoicesRequest;
}

export namespace ListInvoicesRequest {
    export type AsObject = {
        limit?: number,
    }
}

export class ListInvoicesResponse extends jspb.Message { 
    clearInvoicesList(): void;
    getInvoicesList(): Array<ListInvoicesResponse.Invoice>;
    setInvoicesList(value: Array<ListInvoicesResponse.Invoice>): ListInvoicesResponse;
    addInvoices(value?: ListInvoicesResponse.Invoice, index?: number): ListInvoicesResponse.Invoice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInvoicesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListInvoicesResponse): ListInvoicesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInvoicesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInvoicesResponse;
    static deserializeBinaryFromReader(message: ListInvoicesResponse, reader: jspb.BinaryReader): ListInvoicesResponse;
}

export namespace ListInvoicesResponse {
    export type AsObject = {
        invoicesList: Array<ListInvoicesResponse.Invoice.AsObject>,
    }


    export class Invoice extends jspb.Message { 
        getRef(): string;
        setRef(value: string): Invoice;
        getCurrency(): string;
        setCurrency(value: string): Invoice;
        getPaidAmount(): number;
        setPaidAmount(value: number): Invoice;
        getCreatedAt(): number;
        setCreatedAt(value: number): Invoice;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Invoice.AsObject;
        static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Invoice;
        static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
    }

    export namespace Invoice {
        export type AsObject = {
            ref: string,
            currency: string,
            paidAmount: number,
            createdAt: number,
        }
    }

}

export class GetPublishableKeyRequest extends jspb.Message { 
    getClientRef(): string;
    setClientRef(value: string): GetPublishableKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPublishableKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPublishableKeyRequest): GetPublishableKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPublishableKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPublishableKeyRequest;
    static deserializeBinaryFromReader(message: GetPublishableKeyRequest, reader: jspb.BinaryReader): GetPublishableKeyRequest;
}

export namespace GetPublishableKeyRequest {
    export type AsObject = {
        clientRef: string,
    }
}

export class GetPublishableKeyResponse extends jspb.Message { 
    getClientRef(): string;
    setClientRef(value: string): GetPublishableKeyResponse;
    getPublishableKey(): string;
    setPublishableKey(value: string): GetPublishableKeyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPublishableKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPublishableKeyResponse): GetPublishableKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPublishableKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPublishableKeyResponse;
    static deserializeBinaryFromReader(message: GetPublishableKeyResponse, reader: jspb.BinaryReader): GetPublishableKeyResponse;
}

export namespace GetPublishableKeyResponse {
    export type AsObject = {
        clientRef: string,
        publishableKey: string,
    }
}

export class AddPaymentMethodRequest extends jspb.Message { 
    getPaymentMethodId(): string;
    setPaymentMethodId(value: string): AddPaymentMethodRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddPaymentMethodRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddPaymentMethodRequest): AddPaymentMethodRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddPaymentMethodRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddPaymentMethodRequest;
    static deserializeBinaryFromReader(message: AddPaymentMethodRequest, reader: jspb.BinaryReader): AddPaymentMethodRequest;
}

export namespace AddPaymentMethodRequest {
    export type AsObject = {
        paymentMethodId: string,
    }
}

export class AddPaymentMethodResponse extends jspb.Message { 

    hasPaymentMethod(): boolean;
    clearPaymentMethod(): void;
    getPaymentMethod(): PaymentMethod | undefined;
    setPaymentMethod(value?: PaymentMethod): AddPaymentMethodResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddPaymentMethodResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddPaymentMethodResponse): AddPaymentMethodResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddPaymentMethodResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddPaymentMethodResponse;
    static deserializeBinaryFromReader(message: AddPaymentMethodResponse, reader: jspb.BinaryReader): AddPaymentMethodResponse;
}

export namespace AddPaymentMethodResponse {
    export type AsObject = {
        paymentMethod?: PaymentMethod.AsObject,
    }
}

export class RemovePaymentMethodRequest extends jspb.Message { 
    getPaymentMethodId(): string;
    setPaymentMethodId(value: string): RemovePaymentMethodRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePaymentMethodRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePaymentMethodRequest): RemovePaymentMethodRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePaymentMethodRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePaymentMethodRequest;
    static deserializeBinaryFromReader(message: RemovePaymentMethodRequest, reader: jspb.BinaryReader): RemovePaymentMethodRequest;
}

export namespace RemovePaymentMethodRequest {
    export type AsObject = {
        paymentMethodId: string,
    }
}

export class RemovePaymentMethodResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): RemovePaymentMethodResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePaymentMethodResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePaymentMethodResponse): RemovePaymentMethodResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePaymentMethodResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePaymentMethodResponse;
    static deserializeBinaryFromReader(message: RemovePaymentMethodResponse, reader: jspb.BinaryReader): RemovePaymentMethodResponse;
}

export namespace RemovePaymentMethodResponse {
    export type AsObject = {
        success: boolean,
    }
}
