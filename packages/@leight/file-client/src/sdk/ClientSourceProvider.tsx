/**
	This is a file generated by MCP (managed code pattern) approach.
    
    So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {
	type ISourceProps,
	Source
} from "@leight/source-client";
import {
	type IQueryProviderProps,
	QueryProvider
} from "@leight/query-client";
import {
	type IFileSourceSchema,
	FileSchema,
	type IUseFileQuery,
	type IUseFileCountQuery
} from "@leight/file";
import {type FC} from "react";
import {
	FileSourceStore,
	FileFilterStore,
	FileSortStore
} from "./ClientStore";

export interface IFileSourceProps extends ISourceProps<IFileSourceSchema> {
	useSourceQuery: IUseFileQuery;
}

export interface IFileQueryProviderProps extends IQueryProviderProps<IFileSourceSchema> {
	useCountQuery: IUseFileCountQuery;
}

/**
 * Provides access to File data with a connection to filtering and sorting. 
 */
export const FileSource:FC<IFileSourceProps> = props => {
    return <Source<IFileSourceSchema>
        schema={FileSchema}
        SourceProvider={FileSourceStore.Provider}
        useFilterState={FileFilterStore.useState}
        useSortState={FileSortStore.useState}
        {...props}
    />;
};
/**
 * Provides all Query parts for File used in fetching and sorting its data. 
 */
export const FileQueryProvider:FC<IFileQueryProviderProps> = props => {
    return <QueryProvider<IFileSourceSchema>
        FilterProvider={FileFilterStore.Provider}
        useFilterState={FileFilterStore.useState}
        SortProvider={FileSortStore.Provider}
        {...props}
    />;
};
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_rbck6up0u6w67skx9hlfw2cu = true;