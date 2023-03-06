import type {Prisma}                                from "@prisma/client";
import {z}                                          from "zod";
import {JobLogCreateWithoutJobInputSchema}          from "./JobLogCreateWithoutJobInputSchema";
import {JobLogUncheckedCreateWithoutJobInputSchema} from "./JobLogUncheckedCreateWithoutJobInputSchema";
import {JobLogUncheckedUpdateWithoutJobInputSchema} from "./JobLogUncheckedUpdateWithoutJobInputSchema";
import {JobLogUpdateWithoutJobInputSchema}          from "./JobLogUpdateWithoutJobInputSchema";
import {JobLogWhereUniqueInputSchema}               from "./JobLogWhereUniqueInputSchema";

export const JobLogUpsertWithWhereUniqueWithoutJobInputSchema: z.ZodType<Prisma.JobLogUpsertWithWhereUniqueWithoutJobInput> = z.object({
    where:  z.lazy(() => JobLogWhereUniqueInputSchema),
    update: z.union([
        z.lazy(() => JobLogUpdateWithoutJobInputSchema),
        z.lazy(() => JobLogUncheckedUpdateWithoutJobInputSchema)
    ]),
    create: z.union([
        z.lazy(() => JobLogCreateWithoutJobInputSchema),
        z.lazy(() => JobLogUncheckedCreateWithoutJobInputSchema)
    ]),
}).strict();

export default JobLogUpsertWithWhereUniqueWithoutJobInputSchema;
