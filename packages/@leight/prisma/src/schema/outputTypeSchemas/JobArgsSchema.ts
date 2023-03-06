import {type Prisma}      from "@prisma/client";
import {z}                from "zod";
import {JobIncludeSchema} from "../inputTypeSchemas/JobIncludeSchema";
import {JobSelectSchema}  from "../inputTypeSchemas/JobSelectSchema";

export const JobArgsSchema: z.ZodType<Prisma.JobArgs> = z.object({
    select:  z.lazy(() => JobSelectSchema).optional(),
    include: z.lazy(() => JobIncludeSchema).optional(),
}).strict();

export default JobArgsSchema;
