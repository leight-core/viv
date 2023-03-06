import type {Prisma}                                           from "@prisma/client";
import {z}                                                     from "zod";
import {UserTokenCreateManyTokenInputEnvelopeSchema}           from "./UserTokenCreateManyTokenInputEnvelopeSchema";
import {UserTokenCreateOrConnectWithoutTokenInputSchema}       from "./UserTokenCreateOrConnectWithoutTokenInputSchema";
import {UserTokenCreateWithoutTokenInputSchema}                from "./UserTokenCreateWithoutTokenInputSchema";
import {UserTokenScalarWhereInputSchema}                       from "./UserTokenScalarWhereInputSchema";
import {UserTokenUncheckedCreateWithoutTokenInputSchema}       from "./UserTokenUncheckedCreateWithoutTokenInputSchema";
import {UserTokenUpdateManyWithWhereWithoutTokenInputSchema}   from "./UserTokenUpdateManyWithWhereWithoutTokenInputSchema";
import {UserTokenUpdateWithWhereUniqueWithoutTokenInputSchema} from "./UserTokenUpdateWithWhereUniqueWithoutTokenInputSchema";
import {UserTokenUpsertWithWhereUniqueWithoutTokenInputSchema} from "./UserTokenUpsertWithWhereUniqueWithoutTokenInputSchema";
import {UserTokenWhereUniqueInputSchema}                       from "./UserTokenWhereUniqueInputSchema";

export const UserTokenUpdateManyWithoutTokenNestedInputSchema: z.ZodType<Prisma.UserTokenUpdateManyWithoutTokenNestedInput> = z.object({
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
    upsert:          z.union([
        z.lazy(() => UserTokenUpsertWithWhereUniqueWithoutTokenInputSchema),
        z.lazy(() => UserTokenUpsertWithWhereUniqueWithoutTokenInputSchema).array()
    ]).optional(),
    createMany:      z.lazy(() => UserTokenCreateManyTokenInputEnvelopeSchema).optional(),
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
        z.lazy(() => UserTokenUpdateWithWhereUniqueWithoutTokenInputSchema),
        z.lazy(() => UserTokenUpdateWithWhereUniqueWithoutTokenInputSchema).array()
    ]).optional(),
    updateMany:      z.union([
        z.lazy(() => UserTokenUpdateManyWithWhereWithoutTokenInputSchema),
        z.lazy(() => UserTokenUpdateManyWithWhereWithoutTokenInputSchema).array()
    ]).optional(),
    deleteMany:      z.union([
        z.lazy(() => UserTokenScalarWhereInputSchema),
        z.lazy(() => UserTokenScalarWhereInputSchema).array()
    ]).optional(),
}).strict();

export default UserTokenUpdateManyWithoutTokenNestedInputSchema;
