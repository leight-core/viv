import {type Prisma}         from "@prisma/client";
import {z}                   from "zod";
import {JobLogIncludeSchema} from "../inputTypeSchemas/JobLogIncludeSchema";
import {JobLogSelectSchema}  from "../inputTypeSchemas/JobLogSelectSchema";

export const JobLogArgsSchema: z.ZodType<Prisma.JobLogArgs> = z.object({
    select:  z.lazy(() => JobLogSelectSchema).optional(),
    include: z.lazy(() => JobLogIncludeSchema).optional(),
}).strict();

export default JobLogArgsSchema;
