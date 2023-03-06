import type {Prisma}                       from "@prisma/client";
import {z}                                 from "zod";
import {TranslationWhereUniqueInputSchema} from "../inputTypeSchemas/TranslationWhereUniqueInputSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TranslationSelectSchema: z.ZodType<Prisma.TranslationSelect> = z.object({
    id:     z.boolean().optional(),
    locale: z.boolean().optional(),
    label:  z.boolean().optional(),
    text:   z.boolean().optional(),
    hash:   z.boolean().optional(),
}).strict();

export const TranslationFindUniqueArgsSchema: z.ZodType<Prisma.TranslationFindUniqueArgs> = z.object({
    select: TranslationSelectSchema.optional(),
    where:  TranslationWhereUniqueInputSchema,
}).strict()

export default TranslationFindUniqueArgsSchema;
