import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {UserTokenUncheckedUpdateWithoutTokenInputSchema} from "./UserTokenUncheckedUpdateWithoutTokenInputSchema";
import {UserTokenUpdateWithoutTokenInputSchema}          from "./UserTokenUpdateWithoutTokenInputSchema";
import {UserTokenWhereUniqueInputSchema}                 from "./UserTokenWhereUniqueInputSchema";

export const UserTokenUpdateWithWhereUniqueWithoutTokenInputSchema: z.ZodType<Prisma.UserTokenUpdateWithWhereUniqueWithoutTokenInput> = z.object({
    where: z.lazy(() => UserTokenWhereUniqueInputSchema),
    data:  z.union([
        z.lazy(() => UserTokenUpdateWithoutTokenInputSchema),
        z.lazy(() => UserTokenUncheckedUpdateWithoutTokenInputSchema)
    ]),
}).strict();

export default UserTokenUpdateWithWhereUniqueWithoutTokenInputSchema;
