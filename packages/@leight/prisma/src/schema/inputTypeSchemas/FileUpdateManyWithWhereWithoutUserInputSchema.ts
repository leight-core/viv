import type {Prisma}                                   from "@prisma/client";
import {z}                                             from "zod";
import {FileScalarWhereInputSchema}                    from "./FileScalarWhereInputSchema";
import {FileUncheckedUpdateManyWithoutFileInputSchema} from "./FileUncheckedUpdateManyWithoutFileInputSchema";
import {FileUpdateManyMutationInputSchema}             from "./FileUpdateManyMutationInputSchema";

export const FileUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutUserInput> = z.object({
    where: z.lazy(() => FileScalarWhereInputSchema),
    data:  z.union([
        z.lazy(() => FileUpdateManyMutationInputSchema),
        z.lazy(() => FileUncheckedUpdateManyWithoutFileInputSchema)
    ]),
}).strict();

export default FileUpdateManyWithWhereWithoutUserInputSchema;
