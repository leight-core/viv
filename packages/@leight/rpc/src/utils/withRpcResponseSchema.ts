import {ErrorResponseSchema} from "@leight/query";
import {z}                   from "@leight/utils";
import {DataResponseSchema}  from "../schema/DataResponseSchema";

export const withRpcResponseSchema = <TDataSchema extends z.ZodSchema>(schema: TDataSchema) => {
    return z.union([
        DataResponseSchema.merge(z.object({
            data: schema,
        })),
        ErrorResponseSchema,
    ]);
};
