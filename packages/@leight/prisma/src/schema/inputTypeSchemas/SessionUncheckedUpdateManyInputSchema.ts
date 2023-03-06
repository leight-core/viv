import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {DateTimeFieldUpdateOperationsInputSchema} from "./DateTimeFieldUpdateOperationsInputSchema";
import {StringFieldUpdateOperationsInputSchema}   from "./StringFieldUpdateOperationsInputSchema";

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
    id:           z.union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    sessionToken: z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    userId:       z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    expires:      z.union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)
    ]).optional(),
}).strict();

export default SessionUncheckedUpdateManyInputSchema;
