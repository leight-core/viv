import {
    IContainer,
    IEndpointRequest,
    IEndpointSource,
    ISource
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";

export const withSource = <//
    TContainer extends IContainer,
    TSource extends ISource<any, any, any>,
    TQueryParams extends IQueryParams = IQueryParams,
    >({source}: IEndpointSource<TContainer, TSource, TQueryParams>, params: IEndpointRequest<TContainer, any, any, TQueryParams>) => {
    const $source = source(params);
    $source.container.withUser(params.container.user);
    return $source;
};
