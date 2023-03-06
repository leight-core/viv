import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {JobUncheckedUpdateWithoutUserInputSchema} from "./JobUncheckedUpdateWithoutUserInputSchema";
import {JobUpdateWithoutUserInputSchema}          from "./JobUpdateWithoutUserInputSchema";
import {JobWhereUniqueInputSchema}                from "./JobWhereUniqueInputSchema";

export const JobUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.JobUpdateWithWhereUniqueWithoutUserInput> = z.object({
    where: z.lazy(() => JobWhereUniqueInputSchema),
    data:  z.union([
        z.lazy(() => JobUpdateWithoutUserInputSchema),
        z.lazy(() => JobUncheckedUpdateWithoutUserInputSchema)
    ]),
}).strict();

export default JobUpdateWithWhereUniqueWithoutUserInputSchema;
