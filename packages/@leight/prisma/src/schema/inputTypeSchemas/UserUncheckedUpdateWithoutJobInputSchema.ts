import type {Prisma}                                              from "@prisma/client";
import {z}                                                        from "zod";
import {AccountUncheckedUpdateManyWithoutUserNestedInputSchema}   from "./AccountUncheckedUpdateManyWithoutUserNestedInputSchema";
import {FileUncheckedUpdateManyWithoutUserNestedInputSchema}      from "./FileUncheckedUpdateManyWithoutUserNestedInputSchema";
import {NullableDateTimeFieldUpdateOperationsInputSchema}         from "./NullableDateTimeFieldUpdateOperationsInputSchema";
import {NullableStringFieldUpdateOperationsInputSchema}           from "./NullableStringFieldUpdateOperationsInputSchema";
import {SessionUncheckedUpdateManyWithoutUserNestedInputSchema}   from "./SessionUncheckedUpdateManyWithoutUserNestedInputSchema";
import {StringFieldUpdateOperationsInputSchema}                   from "./StringFieldUpdateOperationsInputSchema";
import {UserTokenUncheckedUpdateManyWithoutUserNestedInputSchema} from "./UserTokenUncheckedUpdateManyWithoutUserNestedInputSchema";

export const UserUncheckedUpdateWithoutJobInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutJobInput> = z.object({
    id:            z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    name:          z.union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    email:         z.union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    emailVerified: z.union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    image:         z.union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
    ]).optional().nullable(),
    accounts:      z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    sessions:      z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    UserToken:     z.lazy(() => UserTokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    File:          z.lazy(() => FileUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutJobInputSchema;
