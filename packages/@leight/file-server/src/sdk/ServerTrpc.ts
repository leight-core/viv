/**
 This is a file generated by MCP (managed code pattern) approach.

 So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {
    $FileSource,
    FileQuerySchema,
    type IFileSourceSchema
}                            from "@leight/file";
import {withSourceProcedure} from "@leight/trpc-source-server";

export const FileSourceProcedure              = withSourceProcedure<IFileSourceSchema>({
    source: $FileSource,
    schema: FileQuerySchema,
});
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_bpicl7onmb78u9qj60i99x8e = true;
