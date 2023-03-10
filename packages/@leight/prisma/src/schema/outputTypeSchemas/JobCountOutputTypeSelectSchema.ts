import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const JobCountOutputTypeSelectSchema: z.ZodType<Prisma.JobCountOutputTypeSelect> = z.object({
    logs: z.boolean().optional(),
}).strict();

export default JobCountOutputTypeSelectSchema;
