import type {Prisma}                      from "@prisma/client";
import {z}                                from "zod";
import {TranslationCreateManyInputSchema} from "../inputTypeSchemas/TranslationCreateManyInputSchema";

export const TranslationCreateManyArgsSchema: z.ZodType<Prisma.TranslationCreateManyArgs> = z.object({
    data:           z.union([
        TranslationCreateManyInputSchema,
        TranslationCreateManyInputSchema.array()
    ]),
    skipDuplicates: z.boolean().optional(),
}).strict();

export default TranslationCreateManyArgsSchema;
