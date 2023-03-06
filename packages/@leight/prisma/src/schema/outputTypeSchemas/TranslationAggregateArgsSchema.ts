import type {Prisma}                               from "@prisma/client";
import {z}                                         from "zod";
import {TranslationOrderByWithRelationInputSchema} from "../inputTypeSchemas/TranslationOrderByWithRelationInputSchema";
import {TranslationWhereInputSchema}               from "../inputTypeSchemas/TranslationWhereInputSchema";
import {TranslationWhereUniqueInputSchema}         from "../inputTypeSchemas/TranslationWhereUniqueInputSchema";

export const TranslationAggregateArgsSchema: z.ZodType<Prisma.TranslationAggregateArgs> = z.object({
    where:   TranslationWhereInputSchema.optional(),
    orderBy: z.union([
        TranslationOrderByWithRelationInputSchema.array(),
        TranslationOrderByWithRelationInputSchema
    ]).optional(),
    cursor:  TranslationWhereUniqueInputSchema.optional(),
    take:    z.number().optional(),
    skip:    z.number().optional(),
}).strict();

export default TranslationAggregateArgsSchema;
