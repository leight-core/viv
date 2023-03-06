import type {Prisma}                                   from "@prisma/client";
import {z}                                             from "zod";
import {UserCreateWithoutSessionsInputSchema}          from "./UserCreateWithoutSessionsInputSchema";
import {UserUncheckedCreateWithoutSessionsInputSchema} from "./UserUncheckedCreateWithoutSessionsInputSchema";
import {UserUncheckedUpdateWithoutSessionsInputSchema} from "./UserUncheckedUpdateWithoutSessionsInputSchema";
import {UserUpdateWithoutSessionsInputSchema}          from "./UserUpdateWithoutSessionsInputSchema";

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
    update: z.union([
        z.lazy(() => UserUpdateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema)
    ]),
    create: z.union([
        z.lazy(() => UserCreateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema)
    ]),
}).strict();

export default UserUpsertWithoutSessionsInputSchema;
