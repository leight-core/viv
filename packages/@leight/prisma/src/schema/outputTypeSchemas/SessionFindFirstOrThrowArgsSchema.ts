import type {Prisma}                           from "@prisma/client";
import {z}                                     from "zod";
import {SessionIncludeSchema}                  from "../inputTypeSchemas/SessionIncludeSchema";
import {SessionOrderByWithRelationInputSchema} from "../inputTypeSchemas/SessionOrderByWithRelationInputSchema";
import {SessionScalarFieldEnumSchema}          from "../inputTypeSchemas/SessionScalarFieldEnumSchema";
import {SessionWhereInputSchema}               from "../inputTypeSchemas/SessionWhereInputSchema";
import {SessionWhereUniqueInputSchema}         from "../inputTypeSchemas/SessionWhereUniqueInputSchema";
import {UserArgsSchema}                        from "../outputTypeSchemas/UserArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
    id:           z.boolean().optional(),
    sessionToken: z.boolean().optional(),
    userId:       z.boolean().optional(),
    expires:      z.boolean().optional(),
    user:         z.union([
        z.boolean(),
        z.lazy(() => UserArgsSchema)
    ]).optional(),
}).strict();

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
    select:   SessionSelectSchema.optional(),
    include:  SessionIncludeSchema.optional(),
    where:    SessionWhereInputSchema.optional(),
    orderBy:  z.union([
        SessionOrderByWithRelationInputSchema.array(),
        SessionOrderByWithRelationInputSchema
    ]).optional(),
    cursor:   SessionWhereUniqueInputSchema.optional(),
    take:     z.number().optional(),
    skip:     z.number().optional(),
    distinct: SessionScalarFieldEnumSchema.array().optional(),
}).strict()

export default SessionFindFirstOrThrowArgsSchema;
