import type {Prisma}                          from "@prisma/client";
import {z}                                    from "zod";
import {JobLogUncheckedUpdateManyInputSchema} from "../inputTypeSchemas/JobLogUncheckedUpdateManyInputSchema";
import {JobLogUpdateManyMutationInputSchema}  from "../inputTypeSchemas/JobLogUpdateManyMutationInputSchema";
import {JobLogWhereInputSchema}               from "../inputTypeSchemas/JobLogWhereInputSchema";

export const JobLogUpdateManyArgsSchema: z.ZodType<Prisma.JobLogUpdateManyArgs> = z.object({
    data:  z.union([
        JobLogUpdateManyMutationInputSchema,
        JobLogUncheckedUpdateManyInputSchema
    ]),
    where: JobLogWhereInputSchema.optional(),
}).strict();

export default JobLogUpdateManyArgsSchema;
