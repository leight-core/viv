import type {Prisma}              from "@prisma/client";
import {z}                        from "zod";
import {InputJsonValue}           from "./InputJsonValue";
import {JobStatusSchema}          from "./JobStatusSchema";
import {JsonNullValueInputSchema} from "./JsonNullValueInputSchema";

export const JobCreateManyUserInputSchema: z.ZodType<Prisma.JobCreateManyUserInput> = z.object({
    id:           z.string().cuid().optional(),
    name:         z.string(),
    status:       z.lazy(() => JobStatusSchema).optional(),
    total:        z.number().int().optional(),
    progress:     z.number().optional(),
    success:      z.number().int().optional().nullable(),
    successRatio: z.number().optional().nullable(),
    failure:      z.number().int().optional().nullable(),
    failureRatio: z.number().optional().nullable(),
    skip:         z.number().int().optional().nullable(),
    skipRatio:    z.number().optional().nullable(),
    created:      z.coerce.date(),
    started:      z.coerce.date().optional().nullable(),
    finished:     z.coerce.date().optional().nullable(),
    params:       z.union([
        z.lazy(() => JsonNullValueInputSchema),
        InputJsonValue
    ]),
}).strict();

export default JobCreateManyUserInputSchema;
