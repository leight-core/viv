import type {Prisma}                                from "@prisma/client";
import {z}                                          from "zod";
import {JobLogUncheckedUpdateWithoutJobInputSchema} from "./JobLogUncheckedUpdateWithoutJobInputSchema";
import {JobLogUpdateWithoutJobInputSchema}          from "./JobLogUpdateWithoutJobInputSchema";
import {JobLogWhereUniqueInputSchema}               from "./JobLogWhereUniqueInputSchema";

export const JobLogUpdateWithWhereUniqueWithoutJobInputSchema: z.ZodType<Prisma.JobLogUpdateWithWhereUniqueWithoutJobInput> = z.object({
    where: z.lazy(() => JobLogWhereUniqueInputSchema),
    data:  z.union([
        z.lazy(() => JobLogUpdateWithoutJobInputSchema),
        z.lazy(() => JobLogUncheckedUpdateWithoutJobInputSchema)
    ]),
}).strict();

export default JobLogUpdateWithWhereUniqueWithoutJobInputSchema;
