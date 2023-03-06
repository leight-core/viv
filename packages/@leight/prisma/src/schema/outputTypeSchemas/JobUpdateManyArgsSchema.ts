import type {Prisma}                       from "@prisma/client";
import {z}                                 from "zod";
import {JobUncheckedUpdateManyInputSchema} from "../inputTypeSchemas/JobUncheckedUpdateManyInputSchema";
import {JobUpdateManyMutationInputSchema}  from "../inputTypeSchemas/JobUpdateManyMutationInputSchema";
import {JobWhereInputSchema}               from "../inputTypeSchemas/JobWhereInputSchema";

export const JobUpdateManyArgsSchema: z.ZodType<Prisma.JobUpdateManyArgs> = z.object({
    data:  z.union([
        JobUpdateManyMutationInputSchema,
        JobUncheckedUpdateManyInputSchema
    ]),
    where: JobWhereInputSchema.optional(),
}).strict();

export default JobUpdateManyArgsSchema;
