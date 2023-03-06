import type {Prisma}                                      from "@prisma/client";
import {z}                                                from "zod";
import {DateTimeFieldUpdateOperationsInputSchema}         from "./DateTimeFieldUpdateOperationsInputSchema";
import {IntFieldUpdateOperationsInputSchema}              from "./IntFieldUpdateOperationsInputSchema";
import {NullableDateTimeFieldUpdateOperationsInputSchema} from "./NullableDateTimeFieldUpdateOperationsInputSchema";
import {NullableIntFieldUpdateOperationsInputSchema}      from "./NullableIntFieldUpdateOperationsInputSchema";
import {NullableStringFieldUpdateOperationsInputSchema}   from "./NullableStringFieldUpdateOperationsInputSchema";
import {StringFieldUpdateOperationsInputSchema}           from "./StringFieldUpdateOperationsInputSchema";

export const FileUncheckedUpdateInputSchema: z.ZodType<Prisma.FileUncheckedUpdateInput> = z.object({
    id:       z.union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    path:     z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    name:     z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    mime:     z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    size:     z.union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema)
    ]).optional(),
    location: z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    ttl:      z.union([
        z.number().int(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    created:  z.union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)
    ]).optional(),
    updated:  z.union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    userId:   z.union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
}).strict();

export default FileUncheckedUpdateInputSchema;