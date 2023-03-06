import type {Prisma}                                   from "@prisma/client";
import {z}                                             from "zod";
import {UserCreateOrConnectWithoutAccountsInputSchema} from "./UserCreateOrConnectWithoutAccountsInputSchema";
import {UserCreateWithoutAccountsInputSchema}          from "./UserCreateWithoutAccountsInputSchema";
import {UserUncheckedCreateWithoutAccountsInputSchema} from "./UserUncheckedCreateWithoutAccountsInputSchema";
import {UserUncheckedUpdateWithoutAccountsInputSchema} from "./UserUncheckedUpdateWithoutAccountsInputSchema";
import {UserUpdateWithoutAccountsInputSchema}          from "./UserUpdateWithoutAccountsInputSchema";
import {UserUpsertWithoutAccountsInputSchema}          from "./UserUpsertWithoutAccountsInputSchema";
import {UserWhereUniqueInputSchema}                    from "./UserWhereUniqueInputSchema";

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
    create:          z.union([
        z.lazy(() => UserCreateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema)
    ]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
    upsert:          z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
    connect:         z.lazy(() => UserWhereUniqueInputSchema).optional(),
    update:          z.union([
        z.lazy(() => UserUpdateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema)
    ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutAccountsNestedInputSchema;
