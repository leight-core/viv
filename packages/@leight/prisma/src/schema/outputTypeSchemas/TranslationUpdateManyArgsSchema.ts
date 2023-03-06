import type {Prisma}                               from "@prisma/client";
import {z}                                         from "zod";
import {TranslationUncheckedUpdateManyInputSchema} from "../inputTypeSchemas/TranslationUncheckedUpdateManyInputSchema";
import {TranslationUpdateManyMutationInputSchema}  from "../inputTypeSchemas/TranslationUpdateManyMutationInputSchema";
import {TranslationWhereInputSchema}               from "../inputTypeSchemas/TranslationWhereInputSchema";

export const TranslationUpdateManyArgsSchema: z.ZodType<Prisma.TranslationUpdateManyArgs> = z.object({
    data:  z.union([
        TranslationUpdateManyMutationInputSchema,
        TranslationUncheckedUpdateManyInputSchema
    ]),
    where: TranslationWhereInputSchema.optional(),
}).strict();

export default TranslationUpdateManyArgsSchema;
