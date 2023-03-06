import type {Prisma}                                           from "@prisma/client";
import {z}                                                     from "zod";
import {DateTimeFieldUpdateOperationsInputSchema}              from "./DateTimeFieldUpdateOperationsInputSchema";
import {StringFieldUpdateOperationsInputSchema}                from "./StringFieldUpdateOperationsInputSchema";
import {UserUpdateOneRequiredWithoutSessionsNestedInputSchema} from "./UserUpdateOneRequiredWithoutSessionsNestedInputSchema";

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
    id:           z.union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    sessionToken: z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    expires:      z.union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)
    ]).optional(),
    user:         z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional(),
}).strict();

export default SessionUpdateInputSchema;
