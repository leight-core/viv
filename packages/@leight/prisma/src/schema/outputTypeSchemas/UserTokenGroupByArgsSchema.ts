import type {Prisma}                                   from "@prisma/client";
import {z}                                             from "zod";
import {UserTokenOrderByWithAggregationInputSchema}    from "../inputTypeSchemas/UserTokenOrderByWithAggregationInputSchema";
import {UserTokenScalarFieldEnumSchema}                from "../inputTypeSchemas/UserTokenScalarFieldEnumSchema";
import {UserTokenScalarWhereWithAggregatesInputSchema} from "../inputTypeSchemas/UserTokenScalarWhereWithAggregatesInputSchema";
import {UserTokenWhereInputSchema}                     from "../inputTypeSchemas/UserTokenWhereInputSchema";

export const UserTokenGroupByArgsSchema: z.ZodType<Prisma.UserTokenGroupByArgs> = z.object({
    where:   UserTokenWhereInputSchema.optional(),
    orderBy: z.union([
        UserTokenOrderByWithAggregationInputSchema.array(),
        UserTokenOrderByWithAggregationInputSchema
    ]).optional(),
    by:      UserTokenScalarFieldEnumSchema.array(),
    having:  UserTokenScalarWhereWithAggregatesInputSchema.optional(),
    take:    z.number().optional(),
    skip:    z.number().optional(),
}).strict();

export default UserTokenGroupByArgsSchema;
