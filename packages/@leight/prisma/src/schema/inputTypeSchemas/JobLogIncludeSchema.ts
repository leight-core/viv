import {type Prisma}   from "@prisma/client";
import {z}             from "zod";
import {JobArgsSchema} from "../outputTypeSchemas/JobArgsSchema";

export const JobLogIncludeSchema: z.ZodType<Prisma.JobLogInclude> = z.object({
    job: z.union([
        z.boolean(),
        z.lazy(() => JobArgsSchema)
    ]).optional(),
}).strict();

export default JobLogIncludeSchema;
