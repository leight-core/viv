import {type IFilter} from "@leight/filter";
import {type ISort} from "@leight/sort";
import {type IParams, type IQuery} from "@leight/query";

export interface ISourceConfig<
    TEntity = any,
    TCreate = any,
    TUpdate = any,
    TFilter extends IFilter = IFilter,
    TSort extends ISort = ISort,
    TParams extends IParams = IParams,
> {
    Entity: TEntity;
    DTO: TEntity;
    Create: TCreate;
    Update: TUpdate;
    Filter: TFilter;
    Sort: TSort;
    Query: IQuery<TFilter, TSort, TParams>;
}