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

export const CreateEndpoint = <TContainer extends IContainer, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = IQueryParams>(
    source: IEndpointSource<TContainer, TSource, TQueryParams>,
): IApiHandler<InferSource.Create<TSource>, InferSource.Item<TSource>, TQueryParams> => {
    return Endpoint({
        name:      source.name,
        container: source.container,
        acl:       source.acl,
        handler:   async params => {
            const $source = withSource(source, params);
            return $source.mapper.toItem.map(await $source.create(params.request));
        },
    });
};
