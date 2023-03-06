import type {Prisma}                                from "@prisma/client";
import {z}                                          from "zod";
import {JobLogOrderByWithAggregationInputSchema}    from "../inputTypeSchemas/JobLogOrderByWithAggregationInputSchema";
import {JobLogScalarFieldEnumSchema}                from "../inputTypeSchemas/JobLogScalarFieldEnumSchema";
import {JobLogScalarWhereWithAggregatesInputSchema} from "../inputTypeSchemas/JobLogScalarWhereWithAggregatesInputSchema";
import {JobLogWhereInputSchema}                     from "../inputTypeSchemas/JobLogWhereInputSchema";

export const JobLogGroupByArgsSchema: z.ZodType<Prisma.JobLogGroupByArgs> = z.object({
    where:   JobLogWhereInputSchema.optional(),
    orderBy: z.union([
        JobLogOrderByWithAggregationInputSchema.array(),
        JobLogOrderByWithAggregationInputSchema
    ]).optional(),
    by:      JobLogScalarFieldEnumSchema.array(),
    having:  JobLogScalarWhereWithAggregatesInputSchema.optional(),
    take:    z.number().optional(),
    skip:    z.number().optional(),
}).strict();

export default JobLogGroupByArgsSchema;
