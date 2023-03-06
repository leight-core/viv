import type {Prisma}                                          from "@prisma/client";
import {z}                                                    from "zod";
import {UserTokenCreateManyUserInputEnvelopeSchema}           from "./UserTokenCreateManyUserInputEnvelopeSchema";
import {UserTokenCreateOrConnectWithoutUserInputSchema}       from "./UserTokenCreateOrConnectWithoutUserInputSchema";
import {UserTokenCreateWithoutUserInputSchema}                from "./UserTokenCreateWithoutUserInputSchema";
import {UserTokenScalarWhereInputSchema}                      from "./UserTokenScalarWhereInputSchema";
import {UserTokenUncheckedCreateWithoutUserInputSchema}       from "./UserTokenUncheckedCreateWithoutUserInputSchema";
import {UserTokenUpdateManyWithWhereWithoutUserInputSchema}   from "./UserTokenUpdateManyWithWhereWithoutUserInputSchema";
import {UserTokenUpdateWithWhereUniqueWithoutUserInputSchema} from "./UserTokenUpdateWithWhereUniqueWithoutUserInputSchema";
import {UserTokenUpsertWithWhereUniqueWithoutUserInputSchema} from "./UserTokenUpsertWithWhereUniqueWithoutUserInputSchema";
import {UserTokenWhereUniqueInputSchema}                      from "./UserTokenWhereUniqueInputSchema";

export const UserTokenUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserTokenUncheckedUpdateManyWithoutUserNestedInput> = z.object({
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
    upsert:          z.union([
        z.lazy(() => UserTokenUpsertWithWhereUniqueWithoutUserInputSchema),
        z.lazy(() => UserTokenUpsertWithWhereUniqueWithoutUserInputSchema).array()
    ]).optional(),
    createMany:      z.lazy(() => UserTokenCreateManyUserInputEnvelopeSchema).optional(),
    set:             z.union([
        z.lazy(() => UserTokenWhereUniqueInputSchema),
        z.lazy(() => UserTokenWhereUniqueInputSchema).array()
    ]).optional(),
    disconnect:      z.union([
        z.lazy(() => UserTokenWhereUniqueInputSchema),
        z.lazy(() => UserTokenWhereUniqueInputSchema).array()
    ]).optional(),
    delete:          z.union([
        z.lazy(() => UserTokenWhereUniqueInputSchema),
        z.lazy(() => UserTokenWhereUniqueInputSchema).array()
    ]).optional(),
    connect:         z.union([
        z.lazy(() => UserTokenWhereUniqueInputSchema),
        z.lazy(() => UserTokenWhereUniqueInputSchema).array()
    ]).optional(),
    update:          z.union([
        z.lazy(() => UserTokenUpdateWithWhereUniqueWithoutUserInputSchema),
        z.lazy(() => UserTokenUpdateWithWhereUniqueWithoutUserInputSchema).array()
    ]).optional(),
    updateMany:      z.union([
        z.lazy(() => UserTokenUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => UserTokenUpdateManyWithWhereWithoutUserInputSchema).array()
    ]).optional(),
    deleteMany:      z.union([
        z.lazy(() => UserTokenScalarWhereInputSchema),
        z.lazy(() => UserTokenScalarWhereInputSchema).array()
    ]).optional(),
}).strict();

export default UserTokenUncheckedUpdateManyWithoutUserNestedInputSchema;