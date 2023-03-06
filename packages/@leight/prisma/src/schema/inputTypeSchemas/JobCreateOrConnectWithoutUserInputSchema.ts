import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {JobCreateWithoutUserInputSchema}          from "./JobCreateWithoutUserInputSchema";
import {JobUncheckedCreateWithoutUserInputSchema} from "./JobUncheckedCreateWithoutUserInputSchema";
import {JobWhereUniqueInputSchema}                from "./JobWhereUniqueInputSchema";

export const JobCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.JobCreateOrConnectWithoutUserInput> = z.object({
    where:  z.lazy(() => JobWhereUniqueInputSchema),
    create: z.union([
        z.lazy(() => JobCreateWithoutUserInputSchema),
        z.lazy(() => JobUncheckedCreateWithoutUserInputSchema)
    ]),
}).strict();

export default JobCreateOrConnectWithoutUserInputSchema;
