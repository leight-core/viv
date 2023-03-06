import type {Prisma}                                            from "@prisma/client";
import {z}                                                      from "zod";
import {AccountUncheckedUpdateManyWithoutUserNestedInputSchema} from "./AccountUncheckedUpdateManyWithoutUserNestedInputSchema";
import {FileUncheckedUpdateManyWithoutUserNestedInputSchema}    from "./FileUncheckedUpdateManyWithoutUserNestedInputSchema";
import {JobUncheckedUpdateManyWithoutUserNestedInputSchema}     from "./JobUncheckedUpdateManyWithoutUserNestedInputSchema";
import {NullableDateTimeFieldUpdateOperationsInputSchema}       from "./NullableDateTimeFieldUpdateOperationsInputSchema";
import {NullableStringFieldUpdateOperationsInputSchema}         from "./NullableStringFieldUpdateOperationsInputSchema";
import {SessionUncheckedUpdateManyWithoutUserNestedInputSchema} from "./SessionUncheckedUpdateManyWithoutUserNestedInputSchema";
import {StringFieldUpdateOperationsInputSchema}                 from "./StringFieldUpdateOperationsInputSchema";

export const UserUncheckedUpdateWithoutUserTokenInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutUserTokenInput> = z.object({
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
    File:          z.lazy(() => FileUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    Job:           z.lazy(() => JobUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export default UserUncheckedUpdateWithoutUserTokenInputSchema;
