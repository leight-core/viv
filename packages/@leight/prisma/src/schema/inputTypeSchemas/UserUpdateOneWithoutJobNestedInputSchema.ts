import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {UserCreateOrConnectWithoutJobInputSchema} from "./UserCreateOrConnectWithoutJobInputSchema";
import {UserCreateWithoutJobInputSchema}          from "./UserCreateWithoutJobInputSchema";
import {UserUncheckedCreateWithoutJobInputSchema} from "./UserUncheckedCreateWithoutJobInputSchema";
import {UserUncheckedUpdateWithoutJobInputSchema} from "./UserUncheckedUpdateWithoutJobInputSchema";
import {UserUpdateWithoutJobInputSchema}          from "./UserUpdateWithoutJobInputSchema";
import {UserUpsertWithoutJobInputSchema}          from "./UserUpsertWithoutJobInputSchema";
import {UserWhereUniqueInputSchema}               from "./UserWhereUniqueInputSchema";

export const UserUpdateOneWithoutJobNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutJobNestedInput> = z.object({
    create:          z.union([
        z.lazy(() => UserCreateWithoutJobInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutJobInputSchema)
    ]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutJobInputSchema).optional(),
    upsert:          z.lazy(() => UserUpsertWithoutJobInputSchema).optional(),
    disconnect:      z.boolean().optional(),
    delete:          z.boolean().optional(),
    connect:         z.lazy(() => UserWhereUniqueInputSchema).optional(),
    update:          z.union([
        z.lazy(() => UserUpdateWithoutJobInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutJobInputSchema)
    ]).optional(),
}).strict();

export default UserUpdateOneWithoutJobNestedInputSchema;
