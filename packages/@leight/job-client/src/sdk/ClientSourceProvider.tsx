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
    JobProvider,
    JobSortProvider,
    useJobSort
}                from "./ClientStore";

export interface IJobSourceProps extends ISourceProps<IJobSourceSchema> {
    useSourceQuery: IUseJobQuery;
}

export interface IJobQueryProviderProps extends IQueryProviderProps<IJobSourceSchema> {
    useCountQuery: IUseJobCountQuery;
}

export const JobSource: FC<IJobSourceProps>               = props => {
    return <Source<IJobSourceSchema>
        schema={JobSchema}
        SourceProvider={JobProvider}
        useSortState={useJobSort}
        {...props}
    />;
};
export const JobQueryProvider: FC<IJobQueryProviderProps> = props => {
    return <QueryProvider<IJobSourceSchema>
        SortProvider={JobSortProvider}
        {...props}
    />;
};
