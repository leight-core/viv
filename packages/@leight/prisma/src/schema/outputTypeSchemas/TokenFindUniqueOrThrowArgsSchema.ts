import type {Prisma}                    from "@prisma/client";
import {z}                              from "zod";
import {TokenIncludeSchema}             from "../inputTypeSchemas/TokenIncludeSchema";
import {TokenWhereUniqueInputSchema}    from "../inputTypeSchemas/TokenWhereUniqueInputSchema";
import {TokenCountOutputTypeArgsSchema} from "../outputTypeSchemas/TokenCountOutputTypeArgsSchema";
import {UserTokenFindManyArgsSchema}    from "../outputTypeSchemas/UserTokenFindManyArgsSchema";
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

export const TokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TokenFindUniqueOrThrowArgs> = z.object({
    select:  TokenSelectSchema.optional(),
    include: TokenIncludeSchema.optional(),
    where:   TokenWhereUniqueInputSchema,
}).strict();

export default TokenFindUniqueOrThrowArgsSchema;