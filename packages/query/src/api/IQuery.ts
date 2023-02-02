import {type ICursor} from "@leight/cursor";
import {type IFilter} from "@leight/filter";
import {type ISort} from "@leight/sort";
import {type IParams} from "./IParams";

/**
 * Common interface for making a query to something; it doesn't matter if there is a Repository or
 * whatever source you wish to use. Main purpose is an ability to send this structure over the wire.
 */
export interface IQuery<
    TFilter extends IFilter = IFilter,
    TSort extends ISort = ISort,
    TParams extends IParams = IParams,
> {
    readonly cursor?: ICursor;
    readonly filter?: TFilter;
    readonly sort?: TSort;
    readonly params?: TParams;
}

export namespace InferQuery {
    export type Filter<T> = T extends IQuery<infer U, any, any> ? U : T;
    export type Sort<T> = T extends IQuery<any, infer U, any> ? U : T;
    export type Params<T> = T extends IQuery<any, any, infer U> ? U : T;
}
