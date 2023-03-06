import type {Prisma}                                 from "@prisma/client";
import {z}                                           from "zod";
import {KeywordOrderByWithAggregationInputSchema}    from "../inputTypeSchemas/KeywordOrderByWithAggregationInputSchema";
import {KeywordScalarFieldEnumSchema}                from "../inputTypeSchemas/KeywordScalarFieldEnumSchema";
import {KeywordScalarWhereWithAggregatesInputSchema} from "../inputTypeSchemas/KeywordScalarWhereWithAggregatesInputSchema";
import {KeywordWhereInputSchema}                     from "../inputTypeSchemas/KeywordWhereInputSchema";

export const KeywordGroupByArgsSchema: z.ZodType<Prisma.KeywordGroupByArgs> = z.object({
    where:   KeywordWhereInputSchema.optional(),
    orderBy: z.union([
        KeywordOrderByWithAggregationInputSchema.array(),
        KeywordOrderByWithAggregationInputSchema
    ]).optional(),
    by:      KeywordScalarFieldEnumSchema.array(),
    having:  KeywordScalarWhereWithAggregatesInputSchema.optional(),
    take:    z.number().optional(),
    skip:    z.number().optional(),
}).strict();

export default KeywordGroupByArgsSchema;