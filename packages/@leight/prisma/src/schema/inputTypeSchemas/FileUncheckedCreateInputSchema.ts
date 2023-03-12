import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const FileUncheckedCreateInputSchema: z.ZodType<Prisma.FileUncheckedCreateInput> = z.object({
    id:       z.string().cuid().optional(),
    path:     z.string(),
    name:     z.string(),
    mime:     z.string(),
    size:     z.number().int(),
    location: z.string(),
    ttl:      z.number().int().optional().nullable(),
    created:  z.coerce.date(),
    updated:  z.coerce.date().optional().nullable(),
    userId:   z.string().optional().nullable()
}).strict();

export default FileUncheckedCreateInputSchema;
