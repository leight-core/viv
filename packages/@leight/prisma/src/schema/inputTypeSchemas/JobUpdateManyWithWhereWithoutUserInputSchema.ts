import type {Prisma}                                 from "@prisma/client";
import {z}                                           from "zod";
import {JobScalarWhereInputSchema}                   from "./JobScalarWhereInputSchema";
import {JobUncheckedUpdateManyWithoutJobInputSchema} from "./JobUncheckedUpdateManyWithoutJobInputSchema";
import {JobUpdateManyMutationInputSchema}            from "./JobUpdateManyMutationInputSchema";

export const JobUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.JobUpdateManyWithWhereWithoutUserInput> = z.object({
    where: z.lazy(() => JobScalarWhereInputSchema),
    data:  z.union([
        z.lazy(() => JobUpdateManyMutationInputSchema),
        z.lazy(() => JobUncheckedUpdateManyWithoutJobInputSchema)
    ]),
}).strict();

export default JobUpdateManyWithWhereWithoutUserInputSchema;
