import type {Prisma}                          from "@prisma/client";
import {z}                                    from "zod";
import {JobLogOrderByWithRelationInputSchema} from "../inputTypeSchemas/JobLogOrderByWithRelationInputSchema";
import {JobLogWhereInputSchema}               from "../inputTypeSchemas/JobLogWhereInputSchema";
import {JobLogWhereUniqueInputSchema}         from "../inputTypeSchemas/JobLogWhereUniqueInputSchema";

export const JobLogAggregateArgsSchema: z.ZodType<Prisma.JobLogAggregateArgs> = z.object({
    where:   JobLogWhereInputSchema.optional(),
    orderBy: z.union([
        JobLogOrderByWithRelationInputSchema.array(),
        JobLogOrderByWithRelationInputSchema
    ]).optional(),
    cursor:  JobLogWhereUniqueInputSchema.optional(),
    take:    z.number().optional(),
    skip:    z.number().optional(),
}).strict();

export default JobLogAggregateArgsSchema;
