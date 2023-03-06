import type {Prisma}                                    from "@prisma/client";
import {z}                                              from "zod";
import {NullableIntFieldUpdateOperationsInputSchema}    from "./NullableIntFieldUpdateOperationsInputSchema";
import {NullableStringFieldUpdateOperationsInputSchema} from "./NullableStringFieldUpdateOperationsInputSchema";
import {StringFieldUpdateOperationsInputSchema}         from "./StringFieldUpdateOperationsInputSchema";

export const AccountUncheckedUpdateManyWithoutAccountsInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutAccountsInput> = z.object({
    id:                z.union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    type:              z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    provider:          z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    providerAccountId: z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    refresh_token:     z.union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    access_token:      z.union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    expires_at:        z.union([
        z.number().int(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    token_type:        z.union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    scope:             z.union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    id_token:          z.union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    session_state:     z.union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
}).strict();

export default AccountUncheckedUpdateManyWithoutAccountsInputSchema;