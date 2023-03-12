import type {Prisma}                                              from "@prisma/client";
import {z}                                                        from "zod";
import {AccountUncheckedUpdateManyWithoutUserNestedInputSchema}   from "./AccountUncheckedUpdateManyWithoutUserNestedInputSchema";
import {FileUncheckedUpdateManyWithoutUserNestedInputSchema}      from "./FileUncheckedUpdateManyWithoutUserNestedInputSchema";
import {JobUncheckedUpdateManyWithoutUserNestedInputSchema}       from "./JobUncheckedUpdateManyWithoutUserNestedInputSchema";
import {NullableDateTimeFieldUpdateOperationsInputSchema}         from "./NullableDateTimeFieldUpdateOperationsInputSchema";
import {NullableStringFieldUpdateOperationsInputSchema}           from "./NullableStringFieldUpdateOperationsInputSchema";
import {StringFieldUpdateOperationsInputSchema}                   from "./StringFieldUpdateOperationsInputSchema";
import {UserTokenUncheckedUpdateManyWithoutUserNestedInputSchema} from "./UserTokenUncheckedUpdateManyWithoutUserNestedInputSchema";

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
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
    UserToken:     z.lazy(() => UserTokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    File:          z.lazy(() => FileUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    Job:           z.lazy(() => JobUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutSessionsInputSchema;
