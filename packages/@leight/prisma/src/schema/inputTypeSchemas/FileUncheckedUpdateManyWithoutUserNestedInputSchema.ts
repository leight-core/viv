import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {FileCreateManyUserInputEnvelopeSchema}           from "./FileCreateManyUserInputEnvelopeSchema";
import {FileCreateOrConnectWithoutUserInputSchema}       from "./FileCreateOrConnectWithoutUserInputSchema";
import {FileCreateWithoutUserInputSchema}                from "./FileCreateWithoutUserInputSchema";
import {FileScalarWhereInputSchema}                      from "./FileScalarWhereInputSchema";
import {FileUncheckedCreateWithoutUserInputSchema}       from "./FileUncheckedCreateWithoutUserInputSchema";
import {FileUpdateManyWithWhereWithoutUserInputSchema}   from "./FileUpdateManyWithWhereWithoutUserInputSchema";
import {FileUpdateWithWhereUniqueWithoutUserInputSchema} from "./FileUpdateWithWhereUniqueWithoutUserInputSchema";
import {FileUpsertWithWhereUniqueWithoutUserInputSchema} from "./FileUpsertWithWhereUniqueWithoutUserInputSchema";
import {FileWhereUniqueInputSchema}                      from "./FileWhereUniqueInputSchema";

export const FileUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.FileUncheckedUpdateManyWithoutUserNestedInput> = z.object({
    create:          z.union([
        z.lazy(() => FileCreateWithoutUserInputSchema),
        z.lazy(() => FileCreateWithoutUserInputSchema).array(),
        z.lazy(() => FileUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => FileUncheckedCreateWithoutUserInputSchema).array()
    ]).optional(),
    connectOrCreate: z.union([
        z.lazy(() => FileCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => FileCreateOrConnectWithoutUserInputSchema).array()
    ]).optional(),
    upsert:          z.union([
        z.lazy(() => FileUpsertWithWhereUniqueWithoutUserInputSchema),
        z.lazy(() => FileUpsertWithWhereUniqueWithoutUserInputSchema).array()
    ]).optional(),
    createMany:      z.lazy(() => FileCreateManyUserInputEnvelopeSchema).optional(),
    set:             z.union([
        z.lazy(() => FileWhereUniqueInputSchema),
        z.lazy(() => FileWhereUniqueInputSchema).array()
    ]).optional(),
    disconnect:      z.union([
        z.lazy(() => FileWhereUniqueInputSchema),
        z.lazy(() => FileWhereUniqueInputSchema).array()
    ]).optional(),
    delete:          z.union([
        z.lazy(() => FileWhereUniqueInputSchema),
        z.lazy(() => FileWhereUniqueInputSchema).array()
    ]).optional(),
    connect:         z.union([
        z.lazy(() => FileWhereUniqueInputSchema),
        z.lazy(() => FileWhereUniqueInputSchema).array()
    ]).optional(),
    update:          z.union([
        z.lazy(() => FileUpdateWithWhereUniqueWithoutUserInputSchema),
        z.lazy(() => FileUpdateWithWhereUniqueWithoutUserInputSchema).array()
    ]).optional(),
    updateMany:      z.union([
        z.lazy(() => FileUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => FileUpdateManyWithWhereWithoutUserInputSchema).array()
    ]).optional(),
    deleteMany:      z.union([
        z.lazy(() => FileScalarWhereInputSchema),
        z.lazy(() => FileScalarWhereInputSchema).array()
    ]).optional(),
}).strict();

export default FileUncheckedUpdateManyWithoutUserNestedInputSchema;
