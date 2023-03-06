import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const FileUserIdPathNameCompoundUniqueInputSchema: z.ZodType<Prisma.FileUserIdPathNameCompoundUniqueInput> = z.object({
    userId: z.string(),
    path:   z.string(),
    name:   z.string(),
}).strict();

export default FileUserIdPathNameCompoundUniqueInputSchema;
