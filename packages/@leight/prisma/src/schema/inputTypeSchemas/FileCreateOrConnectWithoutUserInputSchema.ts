import type {Prisma}                               from "@prisma/client";
import {z}                                         from "zod";
import {FileCreateWithoutUserInputSchema}          from "./FileCreateWithoutUserInputSchema";
import {FileUncheckedCreateWithoutUserInputSchema} from "./FileUncheckedCreateWithoutUserInputSchema";
import {FileWhereUniqueInputSchema}                from "./FileWhereUniqueInputSchema";

export const FileCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutUserInput> = z.object({
    where:  z.lazy(() => FileWhereUniqueInputSchema),
    create: z.union([
        z.lazy(() => FileCreateWithoutUserInputSchema),
        z.lazy(() => FileUncheckedCreateWithoutUserInputSchema)
    ]),
}).strict();

export default FileCreateOrConnectWithoutUserInputSchema;
