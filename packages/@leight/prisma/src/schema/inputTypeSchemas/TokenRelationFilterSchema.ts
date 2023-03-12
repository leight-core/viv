import type {Prisma}           from "@prisma/client";
import {z}                     from "zod";
import {TokenWhereInputSchema} from "./TokenWhereInputSchema";

export const TokenRelationFilterSchema: z.ZodType<Prisma.TokenRelationFilter> = z.object({
    is:    z.lazy(() => TokenWhereInputSchema).optional(),
    isNot: z.lazy(() => TokenWhereInputSchema).optional()
}).strict();

export default TokenRelationFilterSchema;
