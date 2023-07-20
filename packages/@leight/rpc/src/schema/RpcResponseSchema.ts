import {z}                          from "@leight/utils";
import {type withRpcResponseSchema} from "../utils/withRpcResponseSchema";
import {DataResponseSchema}         from "./DataResponseSchema";
import {ErrorResponseSchema}        from "./ErrorResponseSchema";

export const RpcResponseSchema = z.union([
    DataResponseSchema,
    ErrorResponseSchema,
]);
export type IRpcResponseSchema<TDataSchema extends z.ZodSchema> = ReturnType<typeof withRpcResponseSchema<TDataSchema>>;
export type IRpcResponse<TDataSchema extends z.ZodSchema> = z.infer<IRpcResponseSchema<TDataSchema>>;
