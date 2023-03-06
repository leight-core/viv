import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {JobLogScalarWhereInputSchema}                    from "./JobLogScalarWhereInputSchema";
import {JobLogUncheckedUpdateManyWithoutLogsInputSchema} from "./JobLogUncheckedUpdateManyWithoutLogsInputSchema";
import {JobLogUpdateManyMutationInputSchema}             from "./JobLogUpdateManyMutationInputSchema";

export const JobLogUpdateManyWithWhereWithoutJobInputSchema: z.ZodType<Prisma.JobLogUpdateManyWithWhereWithoutJobInput> = z.object({
    where: z.lazy(() => JobLogScalarWhereInputSchema),
    data:  z.union([
        z.lazy(() => JobLogUpdateManyMutationInputSchema),
        z.lazy(() => JobLogUncheckedUpdateManyWithoutLogsInputSchema)
    ]),
}).strict();

export default JobLogUpdateManyWithWhereWithoutJobInputSchema;
