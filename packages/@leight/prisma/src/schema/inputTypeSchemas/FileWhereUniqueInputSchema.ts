import type {Prisma}                                 from "@prisma/client";
import {z}                                           from "zod";
import {FileUserIdPathNameCompoundUniqueInputSchema} from "./FileUserIdPathNameCompoundUniqueInputSchema";

export const FileWhereUniqueInputSchema: z.ZodType<Prisma.FileWhereUniqueInput> = z.object({
    id:               z.string().cuid().optional(),
    userId_path_name: z.lazy(() => FileUserIdPathNameCompoundUniqueInputSchema).optional(),
}).strict();

export default FileWhereUniqueInputSchema;
