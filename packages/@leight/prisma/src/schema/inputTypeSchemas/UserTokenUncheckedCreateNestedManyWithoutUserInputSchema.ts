import type {Prisma}                                    from "@prisma/client";
import {z}                                              from "zod";
import {UserTokenCreateManyUserInputEnvelopeSchema}     from "./UserTokenCreateManyUserInputEnvelopeSchema";
import {UserTokenCreateOrConnectWithoutUserInputSchema} from "./UserTokenCreateOrConnectWithoutUserInputSchema";
import {UserTokenCreateWithoutUserInputSchema}          from "./UserTokenCreateWithoutUserInputSchema";
import {UserTokenUncheckedCreateWithoutUserInputSchema} from "./UserTokenUncheckedCreateWithoutUserInputSchema";
import {UserTokenWhereUniqueInputSchema}                from "./UserTokenWhereUniqueInputSchema";

export const UserTokenUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserTokenUncheckedCreateNestedManyWithoutUserInput> = z.object({
    create:          z.union([
        z.lazy(() => UserTokenCreateWithoutUserInputSchema),
        z.lazy(() => UserTokenCreateWithoutUserInputSchema).array(),
        z.lazy(() => UserTokenUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => UserTokenUncheckedCreateWithoutUserInputSchema).array()
    ]).optional(),
    connectOrCreate: z.union([
        z.lazy(() => UserTokenCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => UserTokenCreateOrConnectWithoutUserInputSchema).array()
    ]).optional(),
    createMany:      z.lazy(() => UserTokenCreateManyUserInputEnvelopeSchema).optional(),
    connect:         z.union([
        z.lazy(() => UserTokenWhereUniqueInputSchema),
        z.lazy(() => UserTokenWhereUniqueInputSchema).array()
    ]).optional(),
}).strict();

export default UserTokenUncheckedCreateNestedManyWithoutUserInputSchema;
