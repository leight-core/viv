import type {Prisma}                                    from "@prisma/client";
import {z}                                              from "zod";
import {UserCreateWithoutUserTokenInputSchema}          from "./UserCreateWithoutUserTokenInputSchema";
import {UserUncheckedCreateWithoutUserTokenInputSchema} from "./UserUncheckedCreateWithoutUserTokenInputSchema";
import {UserUncheckedUpdateWithoutUserTokenInputSchema} from "./UserUncheckedUpdateWithoutUserTokenInputSchema";
import {UserUpdateWithoutUserTokenInputSchema}          from "./UserUpdateWithoutUserTokenInputSchema";

export const UserUpsertWithoutUserTokenInputSchema: z.ZodType<Prisma.UserUpsertWithoutUserTokenInput> = z.object({
    update: z.union([
        z.lazy(() => UserUpdateWithoutUserTokenInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutUserTokenInputSchema)
    ]),
    create: z.union([
        z.lazy(() => UserCreateWithoutUserTokenInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutUserTokenInputSchema)
    ]),
}).strict();

export default UserUpsertWithoutUserTokenInputSchema;
