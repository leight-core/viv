import {
    IContainer,
    IEndpointRequest,
    InferSource,
    ISource
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";

export interface IEndpointSource<//
    TContainer extends IContainer,
    TSource extends ISource<any, any, any>,
    TQueryParams extends IQueryParams = IQueryParams> {
    name: string;

    acl?: string[];

    container(): Promise<TContainer>;

    source(params: IEndpointRequest<TContainer, InferSource.Query<TSource>, number, TQueryParams>): TSource;
}
