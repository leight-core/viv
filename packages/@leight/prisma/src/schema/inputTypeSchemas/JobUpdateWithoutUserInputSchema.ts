import type {Prisma}                                      from "@prisma/client";
import {z}                                                from "zod";
import {DateTimeFieldUpdateOperationsInputSchema}         from "./DateTimeFieldUpdateOperationsInputSchema";
import {EnumJobStatusFieldUpdateOperationsInputSchema}    from "./EnumJobStatusFieldUpdateOperationsInputSchema";
import {FloatFieldUpdateOperationsInputSchema}            from "./FloatFieldUpdateOperationsInputSchema";
import {InputJsonValue}                                   from "./InputJsonValue";
import {IntFieldUpdateOperationsInputSchema}              from "./IntFieldUpdateOperationsInputSchema";
import {JobLogUpdateManyWithoutJobNestedInputSchema}      from "./JobLogUpdateManyWithoutJobNestedInputSchema";
import {JobStatusSchema}                                  from "./JobStatusSchema";
import {JsonNullValueInputSchema}                         from "./JsonNullValueInputSchema";
import {NullableDateTimeFieldUpdateOperationsInputSchema} from "./NullableDateTimeFieldUpdateOperationsInputSchema";
import {NullableFloatFieldUpdateOperationsInputSchema}    from "./NullableFloatFieldUpdateOperationsInputSchema";
import {NullableIntFieldUpdateOperationsInputSchema}      from "./NullableIntFieldUpdateOperationsInputSchema";
import {StringFieldUpdateOperationsInputSchema}           from "./StringFieldUpdateOperationsInputSchema";

export const JobUpdateWithoutUserInputSchema: z.ZodType<Prisma.JobUpdateWithoutUserInput> = z.object({
    id:           z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    name:         z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    status:       z.union([
        z.lazy(() => JobStatusSchema),
        z.lazy(() => EnumJobStatusFieldUpdateOperationsInputSchema)
    ]).optional(),
    total:        z.union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema)
    ]).optional(),
    progress:     z.union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputSchema)
    ]).optional(),
    success:      z.union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    successRatio: z.union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    failure:      z.union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    failureRatio: z.union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    skip:         z.union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    skipRatio:    z.union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    created:      z.union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)
    ]).optional(),
    started:      z.union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    finished:     z.union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    params:       z.union([
        z.lazy(() => JsonNullValueInputSchema),
        InputJsonValue
    ]).optional(),
    logs:         z.lazy(() => JobLogUpdateManyWithoutJobNestedInputSchema).optional(),
}).strict();

export default JobUpdateWithoutUserInputSchema;
