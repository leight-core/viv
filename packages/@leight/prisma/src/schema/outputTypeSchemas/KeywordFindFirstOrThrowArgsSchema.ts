import type {Prisma}                           from "@prisma/client";
import {z}                                     from "zod";
import {KeywordOrderByWithRelationInputSchema} from "../inputTypeSchemas/KeywordOrderByWithRelationInputSchema";
import {KeywordScalarFieldEnumSchema}          from "../inputTypeSchemas/KeywordScalarFieldEnumSchema";
import {KeywordWhereInputSchema}               from "../inputTypeSchemas/KeywordWhereInputSchema";
import {KeywordWhereUniqueInputSchema}         from "../inputTypeSchemas/KeywordWhereUniqueInputSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const KeywordSelectSchema: z.ZodType<Prisma.KeywordSelect> = z.object({
    id:   z.boolean().optional(),
    text: z.boolean().optional(),
}).strict();

export const KeywordFindFirstOrThrowArgsSchema: z.ZodType<Prisma.KeywordFindFirstOrThrowArgs> = z.object({
    select:   KeywordSelectSchema.optional(),
    where:    KeywordWhereInputSchema.optional(),
    orderBy:  z.union([
        KeywordOrderByWithRelationInputSchema.array(),
        KeywordOrderByWithRelationInputSchema
    ]).optional(),
    cursor:   KeywordWhereUniqueInputSchema.optional(),
    take:     z.number().optional(),
    skip:     z.number().optional(),
    distinct: KeywordScalarFieldEnumSchema.array().optional(),
}).strict();

export default KeywordFindFirstOrThrowArgsSchema;
