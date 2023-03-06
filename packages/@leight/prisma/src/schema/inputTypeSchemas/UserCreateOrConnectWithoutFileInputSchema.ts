import type {Prisma}                               from "@prisma/client";
import {z}                                         from "zod";
import {UserCreateWithoutFileInputSchema}          from "./UserCreateWithoutFileInputSchema";
import {UserUncheckedCreateWithoutFileInputSchema} from "./UserUncheckedCreateWithoutFileInputSchema";
import {UserWhereUniqueInputSchema}                from "./UserWhereUniqueInputSchema";

export const UserCreateOrConnectWithoutFileInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFileInput> = z.object({
    where:  z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
        z.lazy(() => UserCreateWithoutFileInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutFileInputSchema)
    ]),
}).strict();

export default UserCreateOrConnectWithoutFileInputSchema;
