import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const JobWhereUniqueInputSchema: z.ZodType<Prisma.JobWhereUniqueInput> = z.object({
    id: z.string().cuid().optional(),
}).strict();

export default JobWhereUniqueInputSchema;
