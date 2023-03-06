import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {UserCreateOrConnectWithoutJobInputSchema} from "./UserCreateOrConnectWithoutJobInputSchema";
import {UserCreateWithoutJobInputSchema}          from "./UserCreateWithoutJobInputSchema";
import {UserUncheckedCreateWithoutJobInputSchema} from "./UserUncheckedCreateWithoutJobInputSchema";
import {UserWhereUniqueInputSchema}               from "./UserWhereUniqueInputSchema";

export const UserCreateNestedOneWithoutJobInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutJobInput> = z.object({
    create:          z.union([
        z.lazy(() => UserCreateWithoutJobInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutJobInputSchema)
    ]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutJobInputSchema).optional(),
    connect:         z.lazy(() => UserWhereUniqueInputSchema).optional(),
}).strict();

export default UserCreateNestedOneWithoutJobInputSchema;
