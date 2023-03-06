import type {Prisma}                               from "@prisma/client";
import {z}                                         from "zod";
import {FileUncheckedUpdateWithoutUserInputSchema} from "./FileUncheckedUpdateWithoutUserInputSchema";
import {FileUpdateWithoutUserInputSchema}          from "./FileUpdateWithoutUserInputSchema";
import {FileWhereUniqueInputSchema}                from "./FileWhereUniqueInputSchema";

export const FileUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutUserInput> = z.object({
    where: z.lazy(() => FileWhereUniqueInputSchema),
    data:  z.union([
        z.lazy(() => FileUpdateWithoutUserInputSchema),
        z.lazy(() => FileUncheckedUpdateWithoutUserInputSchema)
    ]),
}).strict();

export default FileUpdateWithWhereUniqueWithoutUserInputSchema;
