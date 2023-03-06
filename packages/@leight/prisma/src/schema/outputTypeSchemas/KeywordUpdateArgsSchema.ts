import type {Prisma}                       from "@prisma/client";
import {z}                                 from "zod";
import {KeywordUncheckedUpdateInputSchema} from "../inputTypeSchemas/KeywordUncheckedUpdateInputSchema";
import {KeywordUpdateInputSchema}          from "../inputTypeSchemas/KeywordUpdateInputSchema";
import {KeywordWhereUniqueInputSchema}     from "../inputTypeSchemas/KeywordWhereUniqueInputSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const KeywordSelectSchema: z.ZodType<Prisma.KeywordSelect> = z.object({
    id:   z.boolean().optional(),
    text: z.boolean().optional(),
}).strict();

export const KeywordUpdateArgsSchema: z.ZodType<Prisma.KeywordUpdateArgs> = z.object({
    select: KeywordSelectSchema.optional(),
    data:   z.union([
        KeywordUpdateInputSchema,
        KeywordUncheckedUpdateInputSchema
    ]),
    where:  KeywordWhereUniqueInputSchema,
}).strict();

export default KeywordUpdateArgsSchema;
