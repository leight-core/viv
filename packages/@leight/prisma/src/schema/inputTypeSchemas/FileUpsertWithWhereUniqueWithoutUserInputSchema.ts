import type {Prisma}                               from "@prisma/client";
import {z}                                         from "zod";
import {FileCreateWithoutUserInputSchema}          from "./FileCreateWithoutUserInputSchema";
import {FileUncheckedCreateWithoutUserInputSchema} from "./FileUncheckedCreateWithoutUserInputSchema";
import {FileUncheckedUpdateWithoutUserInputSchema} from "./FileUncheckedUpdateWithoutUserInputSchema";
import {FileUpdateWithoutUserInputSchema}          from "./FileUpdateWithoutUserInputSchema";
import {FileWhereUniqueInputSchema}                from "./FileWhereUniqueInputSchema";

export const FileUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutUserInput> = z.object({
    where:  z.lazy(() => FileWhereUniqueInputSchema),
    update: z.union([
        z.lazy(() => FileUpdateWithoutUserInputSchema),
        z.lazy(() => FileUncheckedUpdateWithoutUserInputSchema)
    ]),
    create: z.union([
        z.lazy(() => FileCreateWithoutUserInputSchema),
        z.lazy(() => FileUncheckedCreateWithoutUserInputSchema)
    ]),
}).strict();

export default FileUpsertWithWhereUniqueWithoutUserInputSchema;
