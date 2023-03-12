import type {Prisma}                                    from "@prisma/client";
import {z}                                              from "zod";
import {UserCreateOrConnectWithoutUserTokenInputSchema} from "./UserCreateOrConnectWithoutUserTokenInputSchema";
import {UserCreateWithoutUserTokenInputSchema}          from "./UserCreateWithoutUserTokenInputSchema";
import {UserUncheckedCreateWithoutUserTokenInputSchema} from "./UserUncheckedCreateWithoutUserTokenInputSchema";
import {UserWhereUniqueInputSchema}                     from "./UserWhereUniqueInputSchema";

export const UserCreateNestedOneWithoutUserTokenInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserTokenInput> = z.object({
    create:          z.union([
        z.lazy(() => UserCreateWithoutUserTokenInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutUserTokenInputSchema)
    ]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserTokenInputSchema).optional(),
    connect:         z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUserTokenInputSchema;
