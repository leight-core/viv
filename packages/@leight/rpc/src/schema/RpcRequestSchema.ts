import {z}                         from "@leight/utils";
import {type withRpcRequestSchema} from "../utils/withRpcRequestSchema";

export const RpcRequestSchema = z.object({
    service: z.string(),
    data: z.any(),
});
export type IRpcRequestSchema<TDataSchema extends z.ZodSchema> = ReturnType<typeof withRpcRequestSchema<TDataSchema>>;
export type IRpcRequest<TDataSchema extends z.ZodSchema> = z.infer<IRpcRequestSchema<TDataSchema>>;
