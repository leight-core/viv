import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const JobLogCreateManyJobInputSchema: z.ZodType<Prisma.JobLogCreateManyJobInput> = z.object({
    id:      z.string().cuid().optional(),
    message: z.string()
}).strict();

export default JobLogCreateManyJobInputSchema;
