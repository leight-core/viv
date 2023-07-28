import {z}                 from "@leight/utils";
import {RpcResponseSchema} from "./RpcResponseSchema";

export const RpcBulkResponseSchema = z.object({
    bulk: z.record(RpcResponseSchema),
});
export type IRpcBulkResponseSchema = typeof RpcBulkResponseSchema;
export type IRpcBulkResponse = z.infer<IRpcBulkResponseSchema>;
