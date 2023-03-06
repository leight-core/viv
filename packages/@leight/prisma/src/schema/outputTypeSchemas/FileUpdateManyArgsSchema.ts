import type {Prisma}                        from "@prisma/client";
import {z}                                  from "zod";
import {FileUncheckedUpdateManyInputSchema} from "../inputTypeSchemas/FileUncheckedUpdateManyInputSchema";
import {FileUpdateManyMutationInputSchema}  from "../inputTypeSchemas/FileUpdateManyMutationInputSchema";
import {FileWhereInputSchema}               from "../inputTypeSchemas/FileWhereInputSchema";

export const FileUpdateManyArgsSchema: z.ZodType<Prisma.FileUpdateManyArgs> = z.object({
    data:  z.union([
        FileUpdateManyMutationInputSchema,
        FileUncheckedUpdateManyInputSchema
    ]),
    where: FileWhereInputSchema.optional(),
}).strict();

export default FileUpdateManyArgsSchema;
