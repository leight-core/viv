import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const JobLogWhereUniqueInputSchema: z.ZodType<Prisma.JobLogWhereUniqueInput> = z.object({
    id: z.string().cuid().optional(),
}).strict();

export default JobLogWhereUniqueInputSchema;
