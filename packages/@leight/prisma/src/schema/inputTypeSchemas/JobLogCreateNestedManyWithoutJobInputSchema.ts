import type {Prisma}                                from "@prisma/client";
import {z}                                          from "zod";
import {JobLogCreateManyJobInputEnvelopeSchema}     from "./JobLogCreateManyJobInputEnvelopeSchema";
import {JobLogCreateOrConnectWithoutJobInputSchema} from "./JobLogCreateOrConnectWithoutJobInputSchema";
import {JobLogCreateWithoutJobInputSchema}          from "./JobLogCreateWithoutJobInputSchema";
import {JobLogUncheckedCreateWithoutJobInputSchema} from "./JobLogUncheckedCreateWithoutJobInputSchema";
import {JobLogWhereUniqueInputSchema}               from "./JobLogWhereUniqueInputSchema";

export const JobLogCreateNestedManyWithoutJobInputSchema: z.ZodType<Prisma.JobLogCreateNestedManyWithoutJobInput> = z.object({
    create:          z.union([
        z.lazy(() => JobLogCreateWithoutJobInputSchema),
        z.lazy(() => JobLogCreateWithoutJobInputSchema).array(),
        z.lazy(() => JobLogUncheckedCreateWithoutJobInputSchema),
        z.lazy(() => JobLogUncheckedCreateWithoutJobInputSchema).array()
    ]).optional(),
    connectOrCreate: z.union([
        z.lazy(() => JobLogCreateOrConnectWithoutJobInputSchema),
        z.lazy(() => JobLogCreateOrConnectWithoutJobInputSchema).array()
    ]).optional(),
    createMany:      z.lazy(() => JobLogCreateManyJobInputEnvelopeSchema).optional(),
    connect:         z.union([
        z.lazy(() => JobLogWhereUniqueInputSchema),
        z.lazy(() => JobLogWhereUniqueInputSchema).array()
    ]).optional(),
}).strict();

export default JobLogCreateNestedManyWithoutJobInputSchema;