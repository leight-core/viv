import type {Prisma}                              from "@prisma/client";
import {z}                                        from "zod";
import {UserCreateWithoutJobInputSchema}          from "./UserCreateWithoutJobInputSchema";
import {UserUncheckedCreateWithoutJobInputSchema} from "./UserUncheckedCreateWithoutJobInputSchema";
import {UserWhereUniqueInputSchema}               from "./UserWhereUniqueInputSchema";

export const UserCreateOrConnectWithoutJobInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutJobInput> = z.object({
    where:  z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
        z.lazy(() => UserCreateWithoutJobInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutJobInputSchema)
    ]),
}).strict();

export default UserCreateOrConnectWithoutJobInputSchema;
