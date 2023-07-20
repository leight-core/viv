import {z}                   from "@leight/utils";
import {DataResponseSchema}  from "../schema/DataResponseSchema";
import {ErrorResponseSchema} from "../schema/ErrorResponseSchema";

export const withRpcResponseSchema = <TDataSchema extends z.ZodSchema>(schema: TDataSchema) => {
    return z.union([
        DataResponseSchema.merge(z.object({
            data: schema,
        })),
        ErrorResponseSchema,
    ]);
};
