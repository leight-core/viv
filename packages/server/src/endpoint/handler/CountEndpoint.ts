import {
    Endpoint,
    IApiHandler,
    IContainer,
    IEndpointSource,
    InferSource,
    ISource
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";
import {withSource}   from "./withSource";

export const CountEndpoint = <TContainer extends IContainer, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = IQueryParams>(
    source: IEndpointSource<TContainer, TSource, TQueryParams>,
): IApiHandler<InferSource.Query<TSource>, number, TQueryParams> => {
    return Endpoint({
        name:      source.name,
        container: source.container,
        acl:       source.acl,
        handler:   async params => withSource(source, params).count(params.request),
    });
};
