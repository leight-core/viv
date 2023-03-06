import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {JobCreateOrConnectWithoutLogsInputSchema} from "./JobCreateOrConnectWithoutLogsInputSchema";
import {JobCreateWithoutLogsInputSchema}          from "./JobCreateWithoutLogsInputSchema";
import {JobUncheckedCreateWithoutLogsInputSchema} from "./JobUncheckedCreateWithoutLogsInputSchema";
import {JobWhereUniqueInputSchema}                from "./JobWhereUniqueInputSchema";

export const JobCreateNestedOneWithoutLogsInputSchema: z.ZodType<Prisma.JobCreateNestedOneWithoutLogsInput> = z.object({
    create:          z.union([
        z.lazy(() => JobCreateWithoutLogsInputSchema),
        z.lazy(() => JobUncheckedCreateWithoutLogsInputSchema)
    ]).optional(),
    connectOrCreate: z.lazy(() => JobCreateOrConnectWithoutLogsInputSchema).optional(),
    connect:         z.lazy(() => JobWhereUniqueInputSchema).optional(),
}).strict();

export default JobCreateNestedOneWithoutLogsInputSchema;
