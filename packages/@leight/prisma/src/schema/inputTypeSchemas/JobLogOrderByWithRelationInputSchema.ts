import type {Prisma}                       from "@prisma/client";
import {z}                                 from "zod";
import {JobOrderByWithRelationInputSchema} from "./JobOrderByWithRelationInputSchema";
import {SortOrderSchema}                   from "./SortOrderSchema";

export const JobLogOrderByWithRelationInputSchema: z.ZodType<Prisma.JobLogOrderByWithRelationInput> = z.object({
    id:      z.lazy(() => SortOrderSchema).optional(),
    jobId:   z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
    job:     z.lazy(() => JobOrderByWithRelationInputSchema).optional()
}).strict();

export default JobLogOrderByWithRelationInputSchema;
