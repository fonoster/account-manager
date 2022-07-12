"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserLogged = void 0;
const getUserLogged = (call) => {
    return {
        accessKeyId: call.request.getUser().getAccessKeyId(),
        accessKeySecret: call.request.getUser().getAccessKeySecret()
    };
};
exports.getUserLogged = getUserLogged;
