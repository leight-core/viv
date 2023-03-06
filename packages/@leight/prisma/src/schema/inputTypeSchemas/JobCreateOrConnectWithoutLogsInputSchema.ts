import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {JobCreateWithoutLogsInputSchema}          from "./JobCreateWithoutLogsInputSchema";
import {JobUncheckedCreateWithoutLogsInputSchema} from "./JobUncheckedCreateWithoutLogsInputSchema";
import {JobWhereUniqueInputSchema}                from "./JobWhereUniqueInputSchema";

export const JobCreateOrConnectWithoutLogsInputSchema: z.ZodType<Prisma.JobCreateOrConnectWithoutLogsInput> = z.object({
    where:  z.lazy(() => JobWhereUniqueInputSchema),
    create: z.union([
        z.lazy(() => JobCreateWithoutLogsInputSchema),
        z.lazy(() => JobUncheckedCreateWithoutLogsInputSchema)
    ]),
}).strict();

export default JobCreateOrConnectWithoutLogsInputSchema;
