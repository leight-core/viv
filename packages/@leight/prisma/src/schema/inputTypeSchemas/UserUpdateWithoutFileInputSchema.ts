import type {Prisma}                                      from "@prisma/client";
import {z}                                                from "zod";
import {AccountUpdateManyWithoutUserNestedInputSchema}    from "./AccountUpdateManyWithoutUserNestedInputSchema";
import {JobUpdateManyWithoutUserNestedInputSchema}        from "./JobUpdateManyWithoutUserNestedInputSchema";
import {NullableDateTimeFieldUpdateOperationsInputSchema} from "./NullableDateTimeFieldUpdateOperationsInputSchema";
import {NullableStringFieldUpdateOperationsInputSchema}   from "./NullableStringFieldUpdateOperationsInputSchema";
import {SessionUpdateManyWithoutUserNestedInputSchema}    from "./SessionUpdateManyWithoutUserNestedInputSchema";
import {StringFieldUpdateOperationsInputSchema}           from "./StringFieldUpdateOperationsInputSchema";
import {UserTokenUpdateManyWithoutUserNestedInputSchema}  from "./UserTokenUpdateManyWithoutUserNestedInputSchema";

export const UserUpdateWithoutFileInputSchema: z.ZodType<Prisma.UserUpdateWithoutFileInput> = z.object({
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
    sessions:      z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
    UserToken:     z.lazy(() => UserTokenUpdateManyWithoutUserNestedInputSchema).optional(),
    Job:           z.lazy(() => JobUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export default UserUpdateWithoutFileInputSchema;
