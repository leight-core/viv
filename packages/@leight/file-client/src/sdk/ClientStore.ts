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

const StoreSourceContext              = createSourceContext<IFileSourceSchema>({
    name:   "File",
    schema: FileSchema,
});
const StoreSortContext                = createSortContext<IFileSortSchema>({
    name:   "FileSort",
    schema: FileSortSchema,
});
export const FileProvider             = StoreSourceContext.Provider;
export const useFileSource            = StoreSourceContext.useState;
export const useOptionalFileSource    = StoreSourceContext.useOptionalState;
export const useFileStore             = StoreSourceContext.useStore;
export const useOptionalFileStore     = StoreSourceContext.useOptionalStore;
export const FileSortProvider         = StoreSortContext.Provider;
export const useFileSort              = StoreSortContext.useState;
export const useOptionalFileSort      = StoreSortContext.useOptionalState;
export const useFileSortStore         = StoreSortContext.useStore;
export const useOptionalFileSortStore = StoreSortContext.useOptionalStore;