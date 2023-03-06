import type {Prisma}                                    from "@prisma/client";
import {z}                                              from "zod";
import {UserTokenCreateWithoutUserInputSchema}          from "./UserTokenCreateWithoutUserInputSchema";
import {UserTokenUncheckedCreateWithoutUserInputSchema} from "./UserTokenUncheckedCreateWithoutUserInputSchema";
import {UserTokenWhereUniqueInputSchema}                from "./UserTokenWhereUniqueInputSchema";

export const UserTokenCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserTokenCreateOrConnectWithoutUserInput> = z.object({
    where:  z.lazy(() => UserTokenWhereUniqueInputSchema),
    create: z.union([
        z.lazy(() => UserTokenCreateWithoutUserInputSchema),
        z.lazy(() => UserTokenUncheckedCreateWithoutUserInputSchema)
    ]),
}).strict();

export default UserTokenCreateOrConnectWithoutUserInputSchema;
