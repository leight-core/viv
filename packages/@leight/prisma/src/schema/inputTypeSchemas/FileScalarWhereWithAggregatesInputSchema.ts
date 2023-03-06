import type {Prisma}                                from "@prisma/client";
import {z}                                          from "zod";
import {DateTimeNullableWithAggregatesFilterSchema} from "./DateTimeNullableWithAggregatesFilterSchema";
import {DateTimeWithAggregatesFilterSchema}         from "./DateTimeWithAggregatesFilterSchema";
import {IntNullableWithAggregatesFilterSchema}      from "./IntNullableWithAggregatesFilterSchema";
import {IntWithAggregatesFilterSchema}              from "./IntWithAggregatesFilterSchema";
import {StringNullableWithAggregatesFilterSchema}   from "./StringNullableWithAggregatesFilterSchema";
import {StringWithAggregatesFilterSchema}           from "./StringWithAggregatesFilterSchema";

export const FileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FileScalarWhereWithAggregatesInput> = z.object({
    AND:      z.union([
        z.lazy(() => FileScalarWhereWithAggregatesInputSchema),
        z.lazy(() => FileScalarWhereWithAggregatesInputSchema).array()
    ]).optional(),
    OR:       z.lazy(() => FileScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT:      z.union([
        z.lazy(() => FileScalarWhereWithAggregatesInputSchema),
        z.lazy(() => FileScalarWhereWithAggregatesInputSchema).array()
    ]).optional(),
    id:       z.union([
        z.lazy(() => StringWithAggregatesFilterSchema),
        z.string()
    ]).optional(),
    path:     z.union([
        z.lazy(() => StringWithAggregatesFilterSchema),
        z.string()
    ]).optional(),
    name:     z.union([
        z.lazy(() => StringWithAggregatesFilterSchema),
        z.string()
    ]).optional(),
    mime:     z.union([
        z.lazy(() => StringWithAggregatesFilterSchema),
        z.string()
    ]).optional(),
    size:     z.union([
        z.lazy(() => IntWithAggregatesFilterSchema),
        z.number()
    ]).optional(),
    location: z.union([
        z.lazy(() => StringWithAggregatesFilterSchema),
        z.string()
    ]).optional(),
    ttl:      z.union([
        z.lazy(() => IntNullableWithAggregatesFilterSchema),
        z.number()
    ]).optional().nullable(),
    created:  z.union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date()
    ]).optional(),
    updated:  z.union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
        z.coerce.date()
    ]).optional().nullable(),
    userId:   z.union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string()
    ]).optional().nullable(),
}).strict();

export default FileScalarWhereWithAggregatesInputSchema;
