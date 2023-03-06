import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const JobLogUncheckedCreateWithoutJobInputSchema: z.ZodType<Prisma.JobLogUncheckedCreateWithoutJobInput> = z.object({
    id:      z.string().optional(),
    message: z.string(),
}).strict();

export default JobLogUncheckedCreateWithoutJobInputSchema;
