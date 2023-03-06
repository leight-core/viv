import type {Prisma}     from "@prisma/client";
import {z}               from "zod";
import {SortOrderSchema} from "./SortOrderSchema";

export const JobOrderByRelationAggregateInputSchema: z.ZodType<Prisma.JobOrderByRelationAggregateInput> = z.object({
    _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default JobOrderByRelationAggregateInputSchema;
