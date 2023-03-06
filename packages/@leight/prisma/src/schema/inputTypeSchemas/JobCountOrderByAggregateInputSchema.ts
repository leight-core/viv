import type {Prisma}     from "@prisma/client";
import {z}               from "zod";
import {SortOrderSchema} from "./SortOrderSchema";

export const JobCountOrderByAggregateInputSchema: z.ZodType<Prisma.JobCountOrderByAggregateInput> = z.object({
    id:           z.lazy(() => SortOrderSchema).optional(),
    name:         z.lazy(() => SortOrderSchema).optional(),
    status:       z.lazy(() => SortOrderSchema).optional(),
    total:        z.lazy(() => SortOrderSchema).optional(),
    progress:     z.lazy(() => SortOrderSchema).optional(),
    success:      z.lazy(() => SortOrderSchema).optional(),
    successRatio: z.lazy(() => SortOrderSchema).optional(),
    failure:      z.lazy(() => SortOrderSchema).optional(),
    failureRatio: z.lazy(() => SortOrderSchema).optional(),
    skip:         z.lazy(() => SortOrderSchema).optional(),
    skipRatio:    z.lazy(() => SortOrderSchema).optional(),
    created:      z.lazy(() => SortOrderSchema).optional(),
    started:      z.lazy(() => SortOrderSchema).optional(),
    finished:     z.lazy(() => SortOrderSchema).optional(),
    userId:       z.lazy(() => SortOrderSchema).optional(),
    params:       z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default JobCountOrderByAggregateInputSchema;