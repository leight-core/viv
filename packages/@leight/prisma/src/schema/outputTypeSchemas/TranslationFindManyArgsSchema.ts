import type {Prisma}                               from "@prisma/client";
import {z}                                         from "zod";
import {TranslationOrderByWithRelationInputSchema} from "../inputTypeSchemas/TranslationOrderByWithRelationInputSchema";
import {TranslationScalarFieldEnumSchema}          from "../inputTypeSchemas/TranslationScalarFieldEnumSchema";
import {TranslationWhereInputSchema}               from "../inputTypeSchemas/TranslationWhereInputSchema";
import {TranslationWhereUniqueInputSchema}         from "../inputTypeSchemas/TranslationWhereUniqueInputSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TranslationSelectSchema: z.ZodType<Prisma.TranslationSelect> = z.object({
    id:     z.boolean().optional(),
    locale: z.boolean().optional(),
    label:  z.boolean().optional(),
    text:   z.boolean().optional(),
    hash:   z.boolean().optional(),
}).strict();

export const TranslationFindManyArgsSchema: z.ZodType<Prisma.TranslationFindManyArgs> = z.object({
    select:   TranslationSelectSchema.optional(),
    where:    TranslationWhereInputSchema.optional(),
    orderBy:  z.union([
        TranslationOrderByWithRelationInputSchema.array(),
        TranslationOrderByWithRelationInputSchema
    ]).optional(),
    cursor:   TranslationWhereUniqueInputSchema.optional(),
    take:     z.number().optional(),
    skip:     z.number().optional(),
    distinct: TranslationScalarFieldEnumSchema.array().optional(),
}).strict();

export default TranslationFindManyArgsSchema;
