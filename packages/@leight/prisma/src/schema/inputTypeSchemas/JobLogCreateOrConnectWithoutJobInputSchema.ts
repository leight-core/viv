import type {Prisma}                                from "@prisma/client";
import {z}                                          from "zod";
import {JobLogCreateWithoutJobInputSchema}          from "./JobLogCreateWithoutJobInputSchema";
import {JobLogUncheckedCreateWithoutJobInputSchema} from "./JobLogUncheckedCreateWithoutJobInputSchema";
import {JobLogWhereUniqueInputSchema}               from "./JobLogWhereUniqueInputSchema";

export const JobLogCreateOrConnectWithoutJobInputSchema: z.ZodType<Prisma.JobLogCreateOrConnectWithoutJobInput> = z.object({
    where:  z.lazy(() => JobLogWhereUniqueInputSchema),
    create: z.union([
        z.lazy(() => JobLogCreateWithoutJobInputSchema),
        z.lazy(() => JobLogUncheckedCreateWithoutJobInputSchema)
    ]),
}).strict();

export default JobLogCreateOrConnectWithoutJobInputSchema;
