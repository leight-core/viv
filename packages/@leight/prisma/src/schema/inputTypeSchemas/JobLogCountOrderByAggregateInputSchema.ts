import type {Prisma}     from "@prisma/client";
import {z}               from "zod";
import {SortOrderSchema} from "./SortOrderSchema";

export const JobLogCountOrderByAggregateInputSchema: z.ZodType<Prisma.JobLogCountOrderByAggregateInput> = z.object({
    id:      z.lazy(() => SortOrderSchema).optional(),
    jobId:   z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default JobLogCountOrderByAggregateInputSchema;
