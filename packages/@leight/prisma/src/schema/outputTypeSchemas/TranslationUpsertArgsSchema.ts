import type {Prisma}                           from "@prisma/client";
import {z}                                     from "zod";
import {TranslationCreateInputSchema}          from "../inputTypeSchemas/TranslationCreateInputSchema";
import {TranslationUncheckedCreateInputSchema} from "../inputTypeSchemas/TranslationUncheckedCreateInputSchema";
import {TranslationUncheckedUpdateInputSchema} from "../inputTypeSchemas/TranslationUncheckedUpdateInputSchema";
import {TranslationUpdateInputSchema}          from "../inputTypeSchemas/TranslationUpdateInputSchema";
import {TranslationWhereUniqueInputSchema}     from "../inputTypeSchemas/TranslationWhereUniqueInputSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TranslationSelectSchema: z.ZodType<Prisma.TranslationSelect> = z.object({
    id:     z.boolean().optional(),
    locale: z.boolean().optional(),
    label:  z.boolean().optional(),
    text:   z.boolean().optional(),
    hash:   z.boolean().optional(),
}).strict();

export const TranslationUpsertArgsSchema: z.ZodType<Prisma.TranslationUpsertArgs> = z.object({
    select: TranslationSelectSchema.optional(),
    where:  TranslationWhereUniqueInputSchema,
    create: z.union([
        TranslationCreateInputSchema,
        TranslationUncheckedCreateInputSchema
    ]),
    update: z.union([
        TranslationUpdateInputSchema,
        TranslationUncheckedUpdateInputSchema
    ]),
}).strict()

export default TranslationUpsertArgsSchema;
