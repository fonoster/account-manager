import {ServerUnaryCall} from "@grpc/grpc-js";
import {User} from "../protos";

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
export interface Request<T> {
  getUser(): User | undefined;
  setUser(value?: User): T;
}

export const getUserLogged = <T>(
  call: ServerUnaryCall<Request<T>, unknown>
) => {
  return {
    accessKeyId: call.request.getUser().getAccessKeyId(),
    accessKeySecret: call.request.getUser().getAccessKeySecret()
  };
};
