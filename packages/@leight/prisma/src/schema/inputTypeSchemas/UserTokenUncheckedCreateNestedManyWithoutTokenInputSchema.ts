import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {UserTokenCreateManyTokenInputEnvelopeSchema}     from "./UserTokenCreateManyTokenInputEnvelopeSchema";
import {UserTokenCreateOrConnectWithoutTokenInputSchema} from "./UserTokenCreateOrConnectWithoutTokenInputSchema";
import {UserTokenCreateWithoutTokenInputSchema}          from "./UserTokenCreateWithoutTokenInputSchema";
import {UserTokenUncheckedCreateWithoutTokenInputSchema} from "./UserTokenUncheckedCreateWithoutTokenInputSchema";
import {UserTokenWhereUniqueInputSchema}                 from "./UserTokenWhereUniqueInputSchema";

export const UserTokenUncheckedCreateNestedManyWithoutTokenInputSchema: z.ZodType<Prisma.UserTokenUncheckedCreateNestedManyWithoutTokenInput> = z.object({
    create:          z.union([
        z.lazy(() => UserTokenCreateWithoutTokenInputSchema),
        z.lazy(() => UserTokenCreateWithoutTokenInputSchema).array(),
        z.lazy(() => UserTokenUncheckedCreateWithoutTokenInputSchema),
        z.lazy(() => UserTokenUncheckedCreateWithoutTokenInputSchema).array()
    ]).optional(),
    connectOrCreate: z.union([
        z.lazy(() => UserTokenCreateOrConnectWithoutTokenInputSchema),
        z.lazy(() => UserTokenCreateOrConnectWithoutTokenInputSchema).array()
    ]).optional(),
    createMany:      z.lazy(() => UserTokenCreateManyTokenInputEnvelopeSchema).optional(),
    connect:         z.union([
        z.lazy(() => UserTokenWhereUniqueInputSchema),
        z.lazy(() => UserTokenWhereUniqueInputSchema).array()
    ]).optional(),
}).strict();

export default UserTokenUncheckedCreateNestedManyWithoutTokenInputSchema;
