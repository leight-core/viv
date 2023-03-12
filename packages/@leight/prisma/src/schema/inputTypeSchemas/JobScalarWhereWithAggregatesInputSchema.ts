import type {Prisma}                                from "@prisma/client";
import {z}                                          from "zod";
import {DateTimeNullableWithAggregatesFilterSchema} from "./DateTimeNullableWithAggregatesFilterSchema";
import {DateTimeWithAggregatesFilterSchema}         from "./DateTimeWithAggregatesFilterSchema";
import {EnumJobStatusWithAggregatesFilterSchema}    from "./EnumJobStatusWithAggregatesFilterSchema";
import {FloatNullableWithAggregatesFilterSchema}    from "./FloatNullableWithAggregatesFilterSchema";
import {FloatWithAggregatesFilterSchema}            from "./FloatWithAggregatesFilterSchema";
import {IntNullableWithAggregatesFilterSchema}      from "./IntNullableWithAggregatesFilterSchema";
import {IntWithAggregatesFilterSchema}              from "./IntWithAggregatesFilterSchema";
import {JobStatusSchema}                            from "./JobStatusSchema";
import {JsonNullableWithAggregatesFilterSchema}     from "./JsonNullableWithAggregatesFilterSchema";
import {StringNullableWithAggregatesFilterSchema}   from "./StringNullableWithAggregatesFilterSchema";
import {StringWithAggregatesFilterSchema}           from "./StringWithAggregatesFilterSchema";

export const JobScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.JobScalarWhereWithAggregatesInput> = z.object({
    AND:          z.union([
        z.lazy(() => JobScalarWhereWithAggregatesInputSchema),
        z.lazy(() => JobScalarWhereWithAggregatesInputSchema).array()
    ]).optional(),
    OR:           z.lazy(() => JobScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT:          z.union([
        z.lazy(() => JobScalarWhereWithAggregatesInputSchema),
        z.lazy(() => JobScalarWhereWithAggregatesInputSchema).array()
    ]).optional(),
    id:           z.union([
        z.lazy(() => StringWithAggregatesFilterSchema),
        z.string()
    ]).optional(),
    name:         z.union([
        z.lazy(() => StringWithAggregatesFilterSchema),
        z.string()
    ]).optional(),
    status:       z.union([
        z.lazy(() => EnumJobStatusWithAggregatesFilterSchema),
        z.lazy(() => JobStatusSchema)
    ]).optional(),
    total:        z.union([
        z.lazy(() => IntWithAggregatesFilterSchema),
        z.number()
    ]).optional(),
    progress:     z.union([
        z.lazy(() => FloatWithAggregatesFilterSchema),
        z.number()
    ]).optional(),
    success:      z.union([
        z.lazy(() => IntNullableWithAggregatesFilterSchema),
        z.number()
    ]).optional().nullable(),
    successRatio: z.union([
        z.lazy(() => FloatNullableWithAggregatesFilterSchema),
        z.number()
    ]).optional().nullable(),
    failure:      z.union([
        z.lazy(() => IntNullableWithAggregatesFilterSchema),
        z.number()
    ]).optional().nullable(),
    failureRatio: z.union([
        z.lazy(() => FloatNullableWithAggregatesFilterSchema),
        z.number()
    ]).optional().nullable(),
    skip:         z.union([
        z.lazy(() => IntNullableWithAggregatesFilterSchema),
        z.number()
    ]).optional().nullable(),
    skipRatio:    z.union([
        z.lazy(() => FloatNullableWithAggregatesFilterSchema),
        z.number()
    ]).optional().nullable(),
    created:      z.union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date()
    ]).optional(),
    started:      z.union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
        z.coerce.date()
    ]).optional().nullable(),
    finished:     z.union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
        z.coerce.date()
    ]).optional().nullable(),
    userId:       z.union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string()
    ]).optional().nullable(),
    params:       z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional()
}).strict();

export default JobScalarWhereWithAggregatesInputSchema;
