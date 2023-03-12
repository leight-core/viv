import type {Prisma}     from "@prisma/client";
import {z}               from "zod";
import {SortOrderSchema} from "./SortOrderSchema";

export const JobLogMinOrderByAggregateInputSchema: z.ZodType<Prisma.JobLogMinOrderByAggregateInput> = z.object({
    id:      z.lazy(() => SortOrderSchema).optional(),
    jobId:   z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default JobLogMinOrderByAggregateInputSchema;
