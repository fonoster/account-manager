// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var account_manager_pb = require('./account_manager_pb.js');

function serialize_fonoster_account_manager_v1beta1_ChangePlanRequest(arg) {
  if (!(arg instanceof account_manager_pb.ChangePlanRequest)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.ChangePlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_ChangePlanRequest(buffer_arg) {
  return account_manager_pb.ChangePlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonoster_account_manager_v1beta1_ChangePlanResponse(arg) {
  if (!(arg instanceof account_manager_pb.ChangePlanResponse)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.ChangePlanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_ChangePlanResponse(buffer_arg) {
  return account_manager_pb.ChangePlanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonoster_account_manager_v1beta1_GetPlanRequest(arg) {
  if (!(arg instanceof account_manager_pb.GetPlanRequest)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.GetPlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_GetPlanRequest(buffer_arg) {
  return account_manager_pb.GetPlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonoster_account_manager_v1beta1_GetPlanResponse(arg) {
  if (!(arg instanceof account_manager_pb.GetPlanResponse)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.GetPlanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_GetPlanResponse(buffer_arg) {
  return account_manager_pb.GetPlanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonoster_account_manager_v1beta1_GetPublishableKeyRequest(arg) {
  if (!(arg instanceof account_manager_pb.GetPublishableKeyRequest)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.GetPublishableKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_GetPublishableKeyRequest(buffer_arg) {
  return account_manager_pb.GetPublishableKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonoster_account_manager_v1beta1_GetPublishableKeyResponse(arg) {
  if (!(arg instanceof account_manager_pb.GetPublishableKeyResponse)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.GetPublishableKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_GetPublishableKeyResponse(buffer_arg) {
  return account_manager_pb.GetPublishableKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonoster_account_manager_v1beta1_ListInvoicesRequest(arg) {
  if (!(arg instanceof account_manager_pb.ListInvoicesRequest)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.ListInvoicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_ListInvoicesRequest(buffer_arg) {
  return account_manager_pb.ListInvoicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonoster_account_manager_v1beta1_ListInvoicesResponse(arg) {
  if (!(arg instanceof account_manager_pb.ListInvoicesResponse)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.ListInvoicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_ListInvoicesResponse(buffer_arg) {
  return account_manager_pb.ListInvoicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonoster_account_manager_v1beta1_ListPaymentMethodRequest(arg) {
  if (!(arg instanceof account_manager_pb.ListPaymentMethodRequest)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.ListPaymentMethodRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_ListPaymentMethodRequest(buffer_arg) {
  return account_manager_pb.ListPaymentMethodRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonoster_account_manager_v1beta1_ListPaymentMethodResponse(arg) {
  if (!(arg instanceof account_manager_pb.ListPaymentMethodResponse)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.ListPaymentMethodResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_ListPaymentMethodResponse(buffer_arg) {
  return account_manager_pb.ListPaymentMethodResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonoster_account_manager_v1beta1_ListPlansRequest(arg) {
  if (!(arg instanceof account_manager_pb.ListPlansRequest)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.ListPlansRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_ListPlansRequest(buffer_arg) {
  return account_manager_pb.ListPlansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonoster_account_manager_v1beta1_ListPlansResponse(arg) {
  if (!(arg instanceof account_manager_pb.ListPlansResponse)) {
    throw new Error('Expected argument of type fonoster.account_manager.v1beta1.ListPlansResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonoster_account_manager_v1beta1_ListPlansResponse(buffer_arg) {
  return account_manager_pb.ListPlansResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountManagerService = exports.AccountManagerService = {
  getPublishableKey: {
    path: '/fonoster.account_manager.v1beta1.AccountManager/GetPublishableKey',
    requestStream: false,
    responseStream: false,
    requestType: account_manager_pb.GetPublishableKeyRequest,
    responseType: account_manager_pb.GetPublishableKeyResponse,
    requestSerialize: serialize_fonoster_account_manager_v1beta1_GetPublishableKeyRequest,
    requestDeserialize: deserialize_fonoster_account_manager_v1beta1_GetPublishableKeyRequest,
    responseSerialize: serialize_fonoster_account_manager_v1beta1_GetPublishableKeyResponse,
    responseDeserialize: deserialize_fonoster_account_manager_v1beta1_GetPublishableKeyResponse,
  },
  changePlan: {
    path: '/fonoster.account_manager.v1beta1.AccountManager/ChangePlan',
    requestStream: false,
    responseStream: false,
    requestType: account_manager_pb.ChangePlanRequest,
    responseType: account_manager_pb.ChangePlanResponse,
    requestSerialize: serialize_fonoster_account_manager_v1beta1_ChangePlanRequest,
    requestDeserialize: deserialize_fonoster_account_manager_v1beta1_ChangePlanRequest,
    responseSerialize: serialize_fonoster_account_manager_v1beta1_ChangePlanResponse,
    responseDeserialize: deserialize_fonoster_account_manager_v1beta1_ChangePlanResponse,
  },
  getPlan: {
    path: '/fonoster.account_manager.v1beta1.AccountManager/GetPlan',
    requestStream: false,
    responseStream: false,
    requestType: account_manager_pb.GetPlanRequest,
    responseType: account_manager_pb.GetPlanResponse,
    requestSerialize: serialize_fonoster_account_manager_v1beta1_GetPlanRequest,
    requestDeserialize: deserialize_fonoster_account_manager_v1beta1_GetPlanRequest,
    responseSerialize: serialize_fonoster_account_manager_v1beta1_GetPlanResponse,
    responseDeserialize: deserialize_fonoster_account_manager_v1beta1_GetPlanResponse,
  },
  listPlans: {
    path: '/fonoster.account_manager.v1beta1.AccountManager/ListPlans',
    requestStream: false,
    responseStream: false,
    requestType: account_manager_pb.ListPlansRequest,
    responseType: account_manager_pb.ListPlansResponse,
    requestSerialize: serialize_fonoster_account_manager_v1beta1_ListPlansRequest,
    requestDeserialize: deserialize_fonoster_account_manager_v1beta1_ListPlansRequest,
    responseSerialize: serialize_fonoster_account_manager_v1beta1_ListPlansResponse,
    responseDeserialize: deserialize_fonoster_account_manager_v1beta1_ListPlansResponse,
  },
  listPaymentMethods: {
    path: '/fonoster.account_manager.v1beta1.AccountManager/ListPaymentMethods',
    requestStream: false,
    responseStream: false,
    requestType: account_manager_pb.ListPaymentMethodRequest,
    responseType: account_manager_pb.ListPaymentMethodResponse,
    requestSerialize: serialize_fonoster_account_manager_v1beta1_ListPaymentMethodRequest,
    requestDeserialize: deserialize_fonoster_account_manager_v1beta1_ListPaymentMethodRequest,
    responseSerialize: serialize_fonoster_account_manager_v1beta1_ListPaymentMethodResponse,
    responseDeserialize: deserialize_fonoster_account_manager_v1beta1_ListPaymentMethodResponse,
  },
  listInvoices: {
    path: '/fonoster.account_manager.v1beta1.AccountManager/ListInvoices',
    requestStream: false,
    responseStream: false,
    requestType: account_manager_pb.ListInvoicesRequest,
    responseType: account_manager_pb.ListInvoicesResponse,
    requestSerialize: serialize_fonoster_account_manager_v1beta1_ListInvoicesRequest,
    requestDeserialize: deserialize_fonoster_account_manager_v1beta1_ListInvoicesRequest,
    responseSerialize: serialize_fonoster_account_manager_v1beta1_ListInvoicesResponse,
    responseDeserialize: deserialize_fonoster_account_manager_v1beta1_ListInvoicesResponse,
  },
};

exports.AccountManagerClient = grpc.makeGenericClientConstructor(AccountManagerService);
