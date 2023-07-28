import {z} from "@leight/utils";

export const FileSchema = z.object({
    id: z.string(),
});
export type IFileSchema = typeof FileSchema;
export type IFile = z.infer<IFileSchema>;
