import type {Prisma}                                    from "@prisma/client";
import {z}                                              from "zod";
import {UserTokenCreateWithoutUserInputSchema}          from "./UserTokenCreateWithoutUserInputSchema";
import {UserTokenUncheckedCreateWithoutUserInputSchema} from "./UserTokenUncheckedCreateWithoutUserInputSchema";
import {UserTokenUncheckedUpdateWithoutUserInputSchema} from "./UserTokenUncheckedUpdateWithoutUserInputSchema";
import {UserTokenUpdateWithoutUserInputSchema}          from "./UserTokenUpdateWithoutUserInputSchema";
import {UserTokenWhereUniqueInputSchema}                from "./UserTokenWhereUniqueInputSchema";

export const UserTokenUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserTokenUpsertWithWhereUniqueWithoutUserInput> = z.object({
    where:  z.lazy(() => UserTokenWhereUniqueInputSchema),
    update: z.union([
        z.lazy(() => UserTokenUpdateWithoutUserInputSchema),
        z.lazy(() => UserTokenUncheckedUpdateWithoutUserInputSchema)
    ]),
    create: z.union([
        z.lazy(() => UserTokenCreateWithoutUserInputSchema),
        z.lazy(() => UserTokenUncheckedCreateWithoutUserInputSchema)
    ]),
}).strict();

export default UserTokenUpsertWithWhereUniqueWithoutUserInputSchema;
