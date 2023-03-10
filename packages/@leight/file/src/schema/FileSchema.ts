import {EntitySchema} from "@leight/source";
import {z}            from "zod";

export const FileSchema = z.object({
    path:     z.string(),
    name:     z.string(),
    mime:     z.string(),
    location: z.string(),
    size:     z.number().min(0),
    ttl:      z.number().min(0).optional(),
    created:  z.date(),
    userId:   z.string(),
}).merge(EntitySchema);

export type IFileSchema = typeof FileSchema;

export type IFile = z.infer<IFileSchema>;
