import type {Prisma}                       from "@prisma/client";
import {z}                                 from "zod";
import {KeywordCreateInputSchema}          from "../inputTypeSchemas/KeywordCreateInputSchema";
import {KeywordUncheckedCreateInputSchema} from "../inputTypeSchemas/KeywordUncheckedCreateInputSchema";
import {KeywordUncheckedUpdateInputSchema} from "../inputTypeSchemas/KeywordUncheckedUpdateInputSchema";
import {KeywordUpdateInputSchema}          from "../inputTypeSchemas/KeywordUpdateInputSchema";
import {KeywordWhereUniqueInputSchema}     from "../inputTypeSchemas/KeywordWhereUniqueInputSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const KeywordSelectSchema: z.ZodType<Prisma.KeywordSelect> = z.object({
    id:   z.boolean().optional(),
    text: z.boolean().optional(),
}).strict();

export const KeywordUpsertArgsSchema: z.ZodType<Prisma.KeywordUpsertArgs> = z.object({
    select: KeywordSelectSchema.optional(),
    where:  KeywordWhereUniqueInputSchema,
    create: z.union([
        KeywordCreateInputSchema,
        KeywordUncheckedCreateInputSchema
    ]),
    update: z.union([
        KeywordUpdateInputSchema,
        KeywordUncheckedUpdateInputSchema
    ]),
}).strict();

export default KeywordUpsertArgsSchema;
