import type {Prisma}                                             from "@prisma/client";
import {z}                                                       from "zod";
import {StringFieldUpdateOperationsInputSchema}                  from "./StringFieldUpdateOperationsInputSchema";
import {TokenUpdateOneRequiredWithoutUserTokenNestedInputSchema} from "./TokenUpdateOneRequiredWithoutUserTokenNestedInputSchema";
import {UserUpdateOneRequiredWithoutUserTokenNestedInputSchema}  from "./UserUpdateOneRequiredWithoutUserTokenNestedInputSchema";

export const UserTokenUpdateInputSchema: z.ZodType<Prisma.UserTokenUpdateInput> = z.object({
    id:    z.union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    user:  z.lazy(() => UserUpdateOneRequiredWithoutUserTokenNestedInputSchema).optional(),
    token: z.lazy(() => TokenUpdateOneRequiredWithoutUserTokenNestedInputSchema).optional()
}).strict();

export default UserTokenUpdateInputSchema;
