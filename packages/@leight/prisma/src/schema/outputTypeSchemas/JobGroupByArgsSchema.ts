import type {Prisma}                             from "@prisma/client";
import {z}                                       from "zod";
import {JobOrderByWithAggregationInputSchema}    from "../inputTypeSchemas/JobOrderByWithAggregationInputSchema";
import {JobScalarFieldEnumSchema}                from "../inputTypeSchemas/JobScalarFieldEnumSchema";
import {JobScalarWhereWithAggregatesInputSchema} from "../inputTypeSchemas/JobScalarWhereWithAggregatesInputSchema";
import {JobWhereInputSchema}                     from "../inputTypeSchemas/JobWhereInputSchema";

export const JobGroupByArgsSchema: z.ZodType<Prisma.JobGroupByArgs> = z.object({
    where:   JobWhereInputSchema.optional(),
    orderBy: z.union([
        JobOrderByWithAggregationInputSchema.array(),
        JobOrderByWithAggregationInputSchema
    ]).optional(),
    by:      JobScalarFieldEnumSchema.array(),
    having:  JobScalarWhereWithAggregatesInputSchema.optional(),
    take:    z.number().optional(),
    skip:    z.number().optional(),
}).strict();

export default JobGroupByArgsSchema;
