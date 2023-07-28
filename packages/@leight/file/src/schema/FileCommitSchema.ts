import {z} from "@leight/utils";

export const FileCommitSchema = z.object({
    name:    z.string(),
    path:    z.string(),
    chunkId: z.string(),
    mime:    z.string(),
    replace: z.boolean(),
});
export type IFileCommitSchema = typeof FileCommitSchema;
export type IFileCommit = z.infer<IFileCommitSchema>;
