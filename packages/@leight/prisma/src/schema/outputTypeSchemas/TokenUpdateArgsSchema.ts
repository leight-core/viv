import type {Prisma}                     from "@prisma/client";
import {z}                               from "zod";
import {TokenIncludeSchema}              from "../inputTypeSchemas/TokenIncludeSchema";
import {TokenUncheckedUpdateInputSchema} from "../inputTypeSchemas/TokenUncheckedUpdateInputSchema";
import {TokenUpdateInputSchema}          from "../inputTypeSchemas/TokenUpdateInputSchema";
import {TokenWhereUniqueInputSchema}     from "../inputTypeSchemas/TokenWhereUniqueInputSchema";
import {TokenCountOutputTypeArgsSchema}  from "../outputTypeSchemas/TokenCountOutputTypeArgsSchema";
import {UserTokenFindManyArgsSchema}     from "../outputTypeSchemas/UserTokenFindManyArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TokenSelectSchema: z.ZodType<Prisma.TokenSelect> = z.object({
    id:        z.boolean().optional(),
    name:      z.boolean().optional(),
    UserToken: z.union([
        z.boolean(),
        z.lazy(() => UserTokenFindManyArgsSchema)
    ]).optional(),
    _count:    z.union([
        z.boolean(),
        z.lazy(() => TokenCountOutputTypeArgsSchema)
    ]).optional(),
}).strict();

export const TokenUpdateArgsSchema: z.ZodType<Prisma.TokenUpdateArgs> = z.object({
    select:  TokenSelectSchema.optional(),
    include: TokenIncludeSchema.optional(),
    data:    z.union([
        TokenUpdateInputSchema,
        TokenUncheckedUpdateInputSchema
    ]),
    where:   TokenWhereUniqueInputSchema,
}).strict();

export default TokenUpdateArgsSchema;
