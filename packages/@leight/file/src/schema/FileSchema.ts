import {Schema} from "@leight/prisma";
import {type z} from "zod";

export const FileSchema = Schema.FileSchema;

export type IFileSchema = typeof FileSchema;

export type IFile = z.infer<IFileSchema>;
