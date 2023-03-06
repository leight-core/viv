import type {Prisma}                        from "@prisma/client";
import {z}                                  from "zod";
import {UserIncludeSchema}                  from "../inputTypeSchemas/UserIncludeSchema";
import {UserOrderByWithRelationInputSchema} from "../inputTypeSchemas/UserOrderByWithRelationInputSchema";
import {UserScalarFieldEnumSchema}          from "../inputTypeSchemas/UserScalarFieldEnumSchema";
import {UserWhereInputSchema}               from "../inputTypeSchemas/UserWhereInputSchema";
import {UserWhereUniqueInputSchema}         from "../inputTypeSchemas/UserWhereUniqueInputSchema";
import {AccountFindManyArgsSchema}          from "../outputTypeSchemas/AccountFindManyArgsSchema";
import {FileFindManyArgsSchema}             from "../outputTypeSchemas/FileFindManyArgsSchema";
import {JobFindManyArgsSchema}              from "../outputTypeSchemas/JobFindManyArgsSchema";
import {SessionFindManyArgsSchema}          from "../outputTypeSchemas/SessionFindManyArgsSchema";
import {UserCountOutputTypeArgsSchema}      from "../outputTypeSchemas/UserCountOutputTypeArgsSchema";
import {UserTokenFindManyArgsSchema}        from "../outputTypeSchemas/UserTokenFindManyArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
    id:            z.boolean().optional(),
    name:          z.boolean().optional(),
    email:         z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    image:         z.boolean().optional(),
    accounts:      z.union([
        z.boolean(),
        z.lazy(() => AccountFindManyArgsSchema)
    ]).optional(),
    sessions:      z.union([
        z.boolean(),
        z.lazy(() => SessionFindManyArgsSchema)
    ]).optional(),
    UserToken:     z.union([
        z.boolean(),
        z.lazy(() => UserTokenFindManyArgsSchema)
    ]).optional(),
    File:          z.union([
        z.boolean(),
        z.lazy(() => FileFindManyArgsSchema)
    ]).optional(),
    Job:           z.union([
        z.boolean(),
        z.lazy(() => JobFindManyArgsSchema)
    ]).optional(),
    _count:        z.union([
        z.boolean(),
        z.lazy(() => UserCountOutputTypeArgsSchema)
    ]).optional(),
}).strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
    select:   UserSelectSchema.optional(),
    include:  UserIncludeSchema.optional(),
    where:    UserWhereInputSchema.optional(),
    orderBy:  z.union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema
    ]).optional(),
    cursor:   UserWhereUniqueInputSchema.optional(),
    take:     z.number().optional(),
    skip:     z.number().optional(),
    distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export default UserFindManyArgsSchema;
