import type {Prisma}                                          from "@prisma/client";
import {z}                                                    from "zod";
import {InputJsonValue}                                       from "./InputJsonValue";
import {JobLogUncheckedCreateNestedManyWithoutJobInputSchema} from "./JobLogUncheckedCreateNestedManyWithoutJobInputSchema";
import {JobStatusSchema}                                      from "./JobStatusSchema";
import {NullableJsonNullValueInputSchema}                     from "./NullableJsonNullValueInputSchema";

export const JobUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.JobUncheckedCreateWithoutUserInput> = z.object({
    id:           z.string().optional(),
    name:         z.string(),
    status:       z.lazy(() => JobStatusSchema).optional(),
    total:        z.number().optional(),
    progress:     z.number().optional(),
    success:      z.number().optional().nullable(),
    successRatio: z.number().optional().nullable(),
    failure:      z.number().optional().nullable(),
    failureRatio: z.number().optional().nullable(),
    skip:         z.number().optional().nullable(),
    skipRatio:    z.number().optional().nullable(),
    created:      z.coerce.date(),
    started:      z.coerce.date().optional().nullable(),
    finished:     z.coerce.date().optional().nullable(),
    params:       z.union([
        z.lazy(() => NullableJsonNullValueInputSchema),
        InputJsonValue
    ]).optional(),
    logs:         z.lazy(() => JobLogUncheckedCreateNestedManyWithoutJobInputSchema).optional()
}).strict();

export default JobUncheckedCreateWithoutUserInputSchema;
