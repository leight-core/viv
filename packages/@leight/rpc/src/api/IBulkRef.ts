import {type IResponseSchema} from "../schema/ResponseSchema";
import {type IRpcRequest}     from "../schema/RpcRequestSchema";

export interface IBulkRef {
    schema?: IResponseSchema;
    request: IRpcRequest<any>;

    resolve(value: any): void;

    reject(error: any): void;
}
