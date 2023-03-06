import type {Prisma}                           from "@prisma/client";
import {z}                                     from "zod";
import {KeywordUncheckedUpdateManyInputSchema} from "../inputTypeSchemas/KeywordUncheckedUpdateManyInputSchema";
import {KeywordUpdateManyMutationInputSchema}  from "../inputTypeSchemas/KeywordUpdateManyMutationInputSchema";
import {KeywordWhereInputSchema}               from "../inputTypeSchemas/KeywordWhereInputSchema";

export const KeywordUpdateManyArgsSchema: z.ZodType<Prisma.KeywordUpdateManyArgs> = z.object({
    data:  z.union([
        KeywordUpdateManyMutationInputSchema,
        KeywordUncheckedUpdateManyInputSchema
    ]),
    where: KeywordWhereInputSchema.optional(),
}).strict();

export default KeywordUpdateManyArgsSchema;
