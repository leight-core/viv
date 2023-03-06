import type {Prisma}                                    from "@prisma/client";
import {z}                                              from "zod";
import {UserCreateOrConnectWithoutUserTokenInputSchema} from "./UserCreateOrConnectWithoutUserTokenInputSchema";
import {UserCreateWithoutUserTokenInputSchema}          from "./UserCreateWithoutUserTokenInputSchema";
import {UserUncheckedCreateWithoutUserTokenInputSchema} from "./UserUncheckedCreateWithoutUserTokenInputSchema";
import {UserUncheckedUpdateWithoutUserTokenInputSchema} from "./UserUncheckedUpdateWithoutUserTokenInputSchema";
import {UserUpdateWithoutUserTokenInputSchema}          from "./UserUpdateWithoutUserTokenInputSchema";
import {UserUpsertWithoutUserTokenInputSchema}          from "./UserUpsertWithoutUserTokenInputSchema";
import {UserWhereUniqueInputSchema}                     from "./UserWhereUniqueInputSchema";

export const UserUpdateOneRequiredWithoutUserTokenNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserTokenNestedInput> = z.object({
    create:          z.union([
        z.lazy(() => UserCreateWithoutUserTokenInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutUserTokenInputSchema)
    ]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserTokenInputSchema).optional(),
    upsert:          z.lazy(() => UserUpsertWithoutUserTokenInputSchema).optional(),
    connect:         z.lazy(() => UserWhereUniqueInputSchema).optional(),
    update:          z.union([
        z.lazy(() => UserUpdateWithoutUserTokenInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutUserTokenInputSchema)
    ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutUserTokenNestedInputSchema;
