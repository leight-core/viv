import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const FileCreateManyUserInputSchema: z.ZodType<Prisma.FileCreateManyUserInput> = z.object({
    id:       z.string().cuid().optional(),
    path:     z.string(),
    name:     z.string(),
    mime:     z.string(),
    size:     z.number(),
    location: z.string(),
    ttl:      z.number().optional().nullable(),
    created:  z.coerce.date(),
    updated:  z.coerce.date().optional().nullable(),
}).strict();

export default FileCreateManyUserInputSchema;
