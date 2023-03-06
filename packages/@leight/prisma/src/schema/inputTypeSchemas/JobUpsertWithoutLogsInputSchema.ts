import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {JobCreateWithoutLogsInputSchema}          from "./JobCreateWithoutLogsInputSchema";
import {JobUncheckedCreateWithoutLogsInputSchema} from "./JobUncheckedCreateWithoutLogsInputSchema";
import {JobUncheckedUpdateWithoutLogsInputSchema} from "./JobUncheckedUpdateWithoutLogsInputSchema";
import {JobUpdateWithoutLogsInputSchema}          from "./JobUpdateWithoutLogsInputSchema";

export const JobUpsertWithoutLogsInputSchema: z.ZodType<Prisma.JobUpsertWithoutLogsInput> = z.object({
    update: z.union([
        z.lazy(() => JobUpdateWithoutLogsInputSchema),
        z.lazy(() => JobUncheckedUpdateWithoutLogsInputSchema)
    ]),
    create: z.union([
        z.lazy(() => JobCreateWithoutLogsInputSchema),
        z.lazy(() => JobUncheckedCreateWithoutLogsInputSchema)
    ]),
}).strict();

export default JobUpsertWithoutLogsInputSchema;
