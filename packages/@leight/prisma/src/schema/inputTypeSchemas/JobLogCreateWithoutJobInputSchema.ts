import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const JobLogCreateWithoutJobInputSchema: z.ZodType<Prisma.JobLogCreateWithoutJobInput> = z.object({
    id:      z.string().optional(),
    message: z.string()
}).strict();

export default JobLogCreateWithoutJobInputSchema;
