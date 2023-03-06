import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {UserTokenCreateWithoutTokenInputSchema}          from "./UserTokenCreateWithoutTokenInputSchema";
import {UserTokenUncheckedCreateWithoutTokenInputSchema} from "./UserTokenUncheckedCreateWithoutTokenInputSchema";
import {UserTokenUncheckedUpdateWithoutTokenInputSchema} from "./UserTokenUncheckedUpdateWithoutTokenInputSchema";
import {UserTokenUpdateWithoutTokenInputSchema}          from "./UserTokenUpdateWithoutTokenInputSchema";
import {UserTokenWhereUniqueInputSchema}                 from "./UserTokenWhereUniqueInputSchema";

export const UserTokenUpsertWithWhereUniqueWithoutTokenInputSchema: z.ZodType<Prisma.UserTokenUpsertWithWhereUniqueWithoutTokenInput> = z.object({
    where:  z.lazy(() => UserTokenWhereUniqueInputSchema),
    update: z.union([
        z.lazy(() => UserTokenUpdateWithoutTokenInputSchema),
        z.lazy(() => UserTokenUncheckedUpdateWithoutTokenInputSchema)
    ]),
    create: z.union([
        z.lazy(() => UserTokenCreateWithoutTokenInputSchema),
        z.lazy(() => UserTokenUncheckedCreateWithoutTokenInputSchema)
    ]),
}).strict();

export default UserTokenUpsertWithWhereUniqueWithoutTokenInputSchema;
