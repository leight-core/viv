import type {Prisma}                                    from "@prisma/client";
import {z}                                              from "zod";
import {UserTokenUncheckedUpdateWithoutUserInputSchema} from "./UserTokenUncheckedUpdateWithoutUserInputSchema";
import {UserTokenUpdateWithoutUserInputSchema}          from "./UserTokenUpdateWithoutUserInputSchema";
import {UserTokenWhereUniqueInputSchema}                from "./UserTokenWhereUniqueInputSchema";

export const UserTokenUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserTokenUpdateWithWhereUniqueWithoutUserInput> = z.object({
    where: z.lazy(() => UserTokenWhereUniqueInputSchema),
    data:  z.union([
        z.lazy(() => UserTokenUpdateWithoutUserInputSchema),
        z.lazy(() => UserTokenUncheckedUpdateWithoutUserInputSchema)
    ]),
}).strict();

export default UserTokenUpdateWithWhereUniqueWithoutUserInputSchema;
