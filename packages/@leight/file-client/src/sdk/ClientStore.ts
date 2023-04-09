/**
 Source code containing improved Zustand store stuff for Source support (client-side).
 */
import {
    FileSchema,
    FileSortSchema,
    type IFileSortSchema,
    type IFileSourceSchema
}                          from "@leight/file";
import {createSortContext} from "@leight/sort-client";
import {
    createSourceContext,
    type ISourceProps
}                          from "@leight/source-client";

export type IFileSource = ISourceProps<IFileSourceSchema>;

/**
 * Defines Store for File, so you can access it's data.
 */
export const FileSourceStore                  = createSourceContext<IFileSourceSchema>({
    name:   "File",
    schema: FileSchema,
});
/**
 * Defines Store for File sorting data.
 */
export const FileSortStore                    = createSortContext<IFileSortSchema>({
    name:   "FileSort",
    schema: FileSortSchema,
});
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_vq0wyc7zcqckmurds0btidkp = true;
