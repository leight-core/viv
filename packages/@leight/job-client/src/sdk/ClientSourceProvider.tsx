/**
 This is a file generated by MCP (managed code pattern) approach.

 So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {
    type IJobSourceSchema,
    type IUseJobCountQuery,
    type IUseJobQuery,
    JobSchema
}                from "@leight/job";
import {
    type IQueryProviderProps,
    QueryProvider
}                from "@leight/query-client";
import {
    type ISourceProps,
    Source
}                from "@leight/source-client";
import {type FC} from "react";
import {
    JobFilterStore,
    JobSortStore,
    JobSourceStore
}                from "./ClientStore";

export interface IJobSourceProps extends ISourceProps<IJobSourceSchema> {
    useSourceQuery: IUseJobQuery;
}

export interface IJobQueryProviderProps extends IQueryProviderProps<IJobSourceSchema> {
    useCountQuery: IUseJobCountQuery;
}

/**
 * Provides access to Job data with a connection to filtering and sorting.
 */
export const JobSource: FC<IJobSourceProps>               = props => {
    return <Source<IJobSourceSchema>
        schema={JobSchema}
        SourceProvider={JobSourceStore.Provider}
        useSortState={JobSortStore.useState}
        {...props}
    />;
};
/**
 * Provides all Query parts for Job used in fetching and sorting its data.
 */
export const JobQueryProvider: FC<IJobQueryProviderProps> = props => {
    return <QueryProvider<IJobSourceSchema>
        FilterProvider={JobFilterStore.Provider}
        SortProvider={JobSortStore.Provider}
        {...props}
    />;
};
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_pj7e18zq6a97e4v15da1hxgg             = true;
