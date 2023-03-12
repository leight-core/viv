import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const JobLogCreateManyInputSchema: z.ZodType<Prisma.JobLogCreateManyInput> = z.object({
    id:      z.string().cuid().optional(),
    jobId:   z.string(),
    message: z.string()
}).strict();

export default JobLogCreateManyInputSchema;
