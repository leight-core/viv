import {type IResponseSchema} from "../$export/IResponseSchema";

export interface IBulkRef {
    schema?: IResponseSchema;

    resolve(value: any): void;

    reject(error: any): void;
}
