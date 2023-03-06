import type {Prisma}                                      from "@prisma/client";
import {z}                                                from "zod";
import {AccountUpdateManyWithoutUserNestedInputSchema}    from "./AccountUpdateManyWithoutUserNestedInputSchema";
import {FileUpdateManyWithoutUserNestedInputSchema}       from "./FileUpdateManyWithoutUserNestedInputSchema";
import {JobUpdateManyWithoutUserNestedInputSchema}        from "./JobUpdateManyWithoutUserNestedInputSchema";
import {NullableDateTimeFieldUpdateOperationsInputSchema} from "./NullableDateTimeFieldUpdateOperationsInputSchema";
import {NullableStringFieldUpdateOperationsInputSchema}   from "./NullableStringFieldUpdateOperationsInputSchema";
import {StringFieldUpdateOperationsInputSchema}           from "./StringFieldUpdateOperationsInputSchema";
import {UserTokenUpdateManyWithoutUserNestedInputSchema}  from "./UserTokenUpdateManyWithoutUserNestedInputSchema";

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
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
    accounts:      z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
    UserToken:     z.lazy(() => UserTokenUpdateManyWithoutUserNestedInputSchema).optional(),
    File:          z.lazy(() => FileUpdateManyWithoutUserNestedInputSchema).optional(),
    Job:           z.lazy(() => JobUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export default UserUpdateWithoutSessionsInputSchema;
