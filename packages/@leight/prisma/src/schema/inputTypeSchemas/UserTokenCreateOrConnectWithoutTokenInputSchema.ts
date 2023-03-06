import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {UserTokenCreateWithoutTokenInputSchema}          from "./UserTokenCreateWithoutTokenInputSchema";
import {UserTokenUncheckedCreateWithoutTokenInputSchema} from "./UserTokenUncheckedCreateWithoutTokenInputSchema";
import {UserTokenWhereUniqueInputSchema}                 from "./UserTokenWhereUniqueInputSchema";

export const UserTokenCreateOrConnectWithoutTokenInputSchema: z.ZodType<Prisma.UserTokenCreateOrConnectWithoutTokenInput> = z.object({
    where:  z.lazy(() => UserTokenWhereUniqueInputSchema),
    create: z.union([
        z.lazy(() => UserTokenCreateWithoutTokenInputSchema),
        z.lazy(() => UserTokenUncheckedCreateWithoutTokenInputSchema)
    ]),
}).strict();

export default UserTokenCreateOrConnectWithoutTokenInputSchema;
