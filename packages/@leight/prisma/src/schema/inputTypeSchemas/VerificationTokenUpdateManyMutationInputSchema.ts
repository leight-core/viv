import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {DateTimeFieldUpdateOperationsInputSchema} from "./DateTimeFieldUpdateOperationsInputSchema";
import {StringFieldUpdateOperationsInputSchema}   from "./StringFieldUpdateOperationsInputSchema";

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
    identifier: z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    token:      z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    expires:    z.union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)
    ]).optional(),
}).strict();

export default VerificationTokenUpdateManyMutationInputSchema;
