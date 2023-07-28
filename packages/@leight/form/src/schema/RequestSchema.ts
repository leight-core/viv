import {z} from "@leight/utils";

/**
 * Form works with some values in any shape a user wants, but when
 * doing a "request", those values may be mapped to a outgoing request,
 * thus this interface (just a base type).
 */
export type IRequestSchema = z.ZodSchema;
