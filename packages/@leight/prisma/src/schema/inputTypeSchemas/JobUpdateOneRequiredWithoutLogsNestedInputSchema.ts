import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {JobCreateOrConnectWithoutLogsInputSchema} from "./JobCreateOrConnectWithoutLogsInputSchema";
import {JobCreateWithoutLogsInputSchema}          from "./JobCreateWithoutLogsInputSchema";
import {JobUncheckedCreateWithoutLogsInputSchema} from "./JobUncheckedCreateWithoutLogsInputSchema";
import {JobUncheckedUpdateWithoutLogsInputSchema} from "./JobUncheckedUpdateWithoutLogsInputSchema";
import {JobUpdateWithoutLogsInputSchema}          from "./JobUpdateWithoutLogsInputSchema";
import {JobUpsertWithoutLogsInputSchema}          from "./JobUpsertWithoutLogsInputSchema";
import {JobWhereUniqueInputSchema}                from "./JobWhereUniqueInputSchema";

export const JobUpdateOneRequiredWithoutLogsNestedInputSchema: z.ZodType<Prisma.JobUpdateOneRequiredWithoutLogsNestedInput> = z.object({
    create:          z.union([
        z.lazy(() => JobCreateWithoutLogsInputSchema),
        z.lazy(() => JobUncheckedCreateWithoutLogsInputSchema)
    ]).optional(),
    connectOrCreate: z.lazy(() => JobCreateOrConnectWithoutLogsInputSchema).optional(),
    upsert:          z.lazy(() => JobUpsertWithoutLogsInputSchema).optional(),
    connect:         z.lazy(() => JobWhereUniqueInputSchema).optional(),
    update:          z.union([
        z.lazy(() => JobUpdateWithoutLogsInputSchema),
        z.lazy(() => JobUncheckedUpdateWithoutLogsInputSchema)
    ]).optional(),
}).strict();

export default JobUpdateOneRequiredWithoutLogsNestedInputSchema;
