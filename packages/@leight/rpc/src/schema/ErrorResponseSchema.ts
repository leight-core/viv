import {z} from "@leight/utils";

export const ErrorResponseSchema = z.object({
    error: z.object({
        message: z.string(),
        code:    z.number(),
    }),
});
export type IErrorResponseSchema = typeof ErrorResponseSchema;
export type IErrorResponse = z.infer<IErrorResponseSchema>;
