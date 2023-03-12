import type {Prisma}                            from "@prisma/client";
import {z}                                      from "zod";
import {JobLogCountOrderByAggregateInputSchema} from "./JobLogCountOrderByAggregateInputSchema";
import {JobLogMaxOrderByAggregateInputSchema}   from "./JobLogMaxOrderByAggregateInputSchema";
import {JobLogMinOrderByAggregateInputSchema}   from "./JobLogMinOrderByAggregateInputSchema";
import {SortOrderSchema}                        from "./SortOrderSchema";

export const JobLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.JobLogOrderByWithAggregationInput> = z.object({
    id:      z.lazy(() => SortOrderSchema).optional(),
    jobId:   z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
    _count:  z.lazy(() => JobLogCountOrderByAggregateInputSchema).optional(),
    _max:    z.lazy(() => JobLogMaxOrderByAggregateInputSchema).optional(),
    _min:    z.lazy(() => JobLogMinOrderByAggregateInputSchema).optional()
}).strict();

export default JobLogOrderByWithAggregationInputSchema;
