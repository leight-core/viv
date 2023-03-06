import type {Prisma}                                      from "@prisma/client";
import {z}                                                from "zod";
import {DateTimeFieldUpdateOperationsInputSchema}         from "./DateTimeFieldUpdateOperationsInputSchema";
import {IntFieldUpdateOperationsInputSchema}              from "./IntFieldUpdateOperationsInputSchema";
import {NullableDateTimeFieldUpdateOperationsInputSchema} from "./NullableDateTimeFieldUpdateOperationsInputSchema";
import {NullableIntFieldUpdateOperationsInputSchema}      from "./NullableIntFieldUpdateOperationsInputSchema";
import {StringFieldUpdateOperationsInputSchema}           from "./StringFieldUpdateOperationsInputSchema";

export const FileUpdateWithoutUserInputSchema: z.ZodType<Prisma.FileUpdateWithoutUserInput> = z.object({
    id:       z.union([
        z.string(),
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
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema)
    ]).optional(),
    location: z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    ttl:      z.union([
        z.number(),
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
}).strict();

export default FileUpdateWithoutUserInputSchema;