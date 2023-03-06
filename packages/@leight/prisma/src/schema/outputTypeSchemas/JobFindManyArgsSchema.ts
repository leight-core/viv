import type {Prisma}                       from "@prisma/client";
import {z}                                 from "zod";
import {JobIncludeSchema}                  from "../inputTypeSchemas/JobIncludeSchema";
import {JobOrderByWithRelationInputSchema} from "../inputTypeSchemas/JobOrderByWithRelationInputSchema";
import {JobScalarFieldEnumSchema}          from "../inputTypeSchemas/JobScalarFieldEnumSchema";
import {JobWhereInputSchema}               from "../inputTypeSchemas/JobWhereInputSchema";
import {JobWhereUniqueInputSchema}         from "../inputTypeSchemas/JobWhereUniqueInputSchema";
import {JobCountOutputTypeArgsSchema}      from "../outputTypeSchemas/JobCountOutputTypeArgsSchema";
import {JobLogFindManyArgsSchema}          from "../outputTypeSchemas/JobLogFindManyArgsSchema";
import {UserArgsSchema}                    from "../outputTypeSchemas/UserArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const JobSelectSchema: z.ZodType<Prisma.JobSelect> = z.object({
    id:           z.boolean().optional(),
    name:         z.boolean().optional(),
    status:       z.boolean().optional(),
    total:        z.boolean().optional(),
    progress:     z.boolean().optional(),
    success:      z.boolean().optional(),
    successRatio: z.boolean().optional(),
    failure:      z.boolean().optional(),
    failureRatio: z.boolean().optional(),
    skip:         z.boolean().optional(),
    skipRatio:    z.boolean().optional(),
    created:      z.boolean().optional(),
    started:      z.boolean().optional(),
    finished:     z.boolean().optional(),
    userId:       z.boolean().optional(),
    params:       z.boolean().optional(),
    user:         z.union([
        z.boolean(),
        z.lazy(() => UserArgsSchema)
    ]).optional(),
    logs:         z.union([
        z.boolean(),
        z.lazy(() => JobLogFindManyArgsSchema)
    ]).optional(),
    _count:       z.union([
        z.boolean(),
        z.lazy(() => JobCountOutputTypeArgsSchema)
    ]).optional(),
}).strict();

export const JobFindManyArgsSchema: z.ZodType<Prisma.JobFindManyArgs> = z.object({
    select:   JobSelectSchema.optional(),
    include:  JobIncludeSchema.optional(),
    where:    JobWhereInputSchema.optional(),
    orderBy:  z.union([
        JobOrderByWithRelationInputSchema.array(),
        JobOrderByWithRelationInputSchema
    ]).optional(),
    cursor:   JobWhereUniqueInputSchema.optional(),
    take:     z.number().optional(),
    skip:     z.number().optional(),
    distinct: JobScalarFieldEnumSchema.array().optional(),
}).strict();

export default JobFindManyArgsSchema;
