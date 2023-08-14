import {ErrorResponseSchema}        from "@leight/query";
import {z}                          from "@leight/utils";
import {type withRpcResponseSchema} from "../utils/withRpcResponseSchema";
import {DataResponseSchema}         from "./DataResponseSchema";

export const RpcResponseSchema = z.union([
    ErrorResponseSchema,
    DataResponseSchema,
]);
export type IRpcResponseSchema<TDataSchema extends z.ZodSchema> = ReturnType<typeof withRpcResponseSchema<TDataSchema>>;
export type IRpcResponse<TDataSchema extends z.ZodSchema> = z.infer<IRpcResponseSchema<TDataSchema>>;
