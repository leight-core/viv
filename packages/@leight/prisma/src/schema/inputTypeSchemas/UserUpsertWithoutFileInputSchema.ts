import type {Prisma}                               from "@prisma/client";
import {z}                                         from "zod";
import {UserCreateWithoutFileInputSchema}          from "./UserCreateWithoutFileInputSchema";
import {UserUncheckedCreateWithoutFileInputSchema} from "./UserUncheckedCreateWithoutFileInputSchema";
import {UserUncheckedUpdateWithoutFileInputSchema} from "./UserUncheckedUpdateWithoutFileInputSchema";
import {UserUpdateWithoutFileInputSchema}          from "./UserUpdateWithoutFileInputSchema";

export const UserUpsertWithoutFileInputSchema: z.ZodType<Prisma.UserUpsertWithoutFileInput> = z.object({
    update: z.union([
        z.lazy(() => UserUpdateWithoutFileInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutFileInputSchema)
    ]),
    create: z.union([
        z.lazy(() => UserCreateWithoutFileInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutFileInputSchema)
    ]),
}).strict();

export default UserUpsertWithoutFileInputSchema;
