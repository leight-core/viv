import {z} from "@leight/utils";

/**
 * When a form process it's values, it could return any shape, doesn't matter from
 * where it comes (API or just some internal logic).
 *
 * So this is a base type for a response from processed values of a a form.
 */
export type IResponseSchema = z.ZodSchema;
