import type {Prisma}                         from "@prisma/client";
import {z}                                   from "zod";
import {TokenUncheckedUpdateManyInputSchema} from "../inputTypeSchemas/TokenUncheckedUpdateManyInputSchema";
import {TokenUpdateManyMutationInputSchema}  from "../inputTypeSchemas/TokenUpdateManyMutationInputSchema";
import {TokenWhereInputSchema}               from "../inputTypeSchemas/TokenWhereInputSchema";

export const TokenUpdateManyArgsSchema: z.ZodType<Prisma.TokenUpdateManyArgs> = z.object({
    data:  z.union([
        TokenUpdateManyMutationInputSchema,
        TokenUncheckedUpdateManyInputSchema
    ]),
    where: TokenWhereInputSchema.optional(),
}).strict();

export default TokenUpdateManyArgsSchema;
