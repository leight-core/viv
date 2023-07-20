import {z}                from "@leight/utils";
import {RpcRequestSchema} from "./RpcRequestSchema";

export const RpcBulkRequestSchema = z.object({
    bulk: z.record(RpcRequestSchema),
});
export type IRpcBulkRequestSchema = typeof RpcBulkRequestSchema;
export type IRpcBulkRequest = z.infer<IRpcBulkRequestSchema>;
