import { ServerUnaryCall } from "@grpc/grpc-js";
import { User } from "../protos";
export interface Request<T> {
    getUser(): User | undefined;
    setUser(value?: User): T;
}
export declare const getUserLogged: <T>(call: ServerUnaryCall<Request<T>, unknown>) => {
    accessKeyId: string;
    accessKeySecret: string;
};
