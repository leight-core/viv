import type {Prisma}                                    from "@prisma/client";
import {z}                                              from "zod";
import {UserCreateWithoutUserTokenInputSchema}          from "./UserCreateWithoutUserTokenInputSchema";
import {UserUncheckedCreateWithoutUserTokenInputSchema} from "./UserUncheckedCreateWithoutUserTokenInputSchema";
import {UserWhereUniqueInputSchema}                     from "./UserWhereUniqueInputSchema";

export const UserCreateOrConnectWithoutUserTokenInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserTokenInput> = z.object({
    where:  z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
        z.lazy(() => UserCreateWithoutUserTokenInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutUserTokenInputSchema)
    ]),
}).strict();

export default UserCreateOrConnectWithoutUserTokenInputSchema;
