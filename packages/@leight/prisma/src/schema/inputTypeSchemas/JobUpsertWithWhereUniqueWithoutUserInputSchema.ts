import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {JobCreateWithoutUserInputSchema}          from "./JobCreateWithoutUserInputSchema";
import {JobUncheckedCreateWithoutUserInputSchema} from "./JobUncheckedCreateWithoutUserInputSchema";
import {JobUncheckedUpdateWithoutUserInputSchema} from "./JobUncheckedUpdateWithoutUserInputSchema";
import {JobUpdateWithoutUserInputSchema}          from "./JobUpdateWithoutUserInputSchema";
import {JobWhereUniqueInputSchema}                from "./JobWhereUniqueInputSchema";

export const JobUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.JobUpsertWithWhereUniqueWithoutUserInput> = z.object({
    where:  z.lazy(() => JobWhereUniqueInputSchema),
    update: z.union([
        z.lazy(() => JobUpdateWithoutUserInputSchema),
        z.lazy(() => JobUncheckedUpdateWithoutUserInputSchema)
    ]),
    create: z.union([
        z.lazy(() => JobCreateWithoutUserInputSchema),
        z.lazy(() => JobUncheckedCreateWithoutUserInputSchema)
    ]),
}).strict();

export default JobUpsertWithWhereUniqueWithoutUserInputSchema;
