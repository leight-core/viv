import {
    Endpoint,
    IApiHandler,
    IContainer,
    IEndpointSource,
    InferSource,
    ISource
}                           from "@leight/server";
import {IWithIdentityQuery} from "@leight/shared";
import {withSource}         from "./withSource";

export const FetchEndpoint = <TContainer extends IContainer, TSource extends ISource<any, any, any>>(
    source: IEndpointSource<TContainer, TSource, IWithIdentityQuery>,
): IApiHandler<undefined, InferSource.Item<TSource>, IWithIdentityQuery> => {
    return Endpoint({
        name:      source.name,
        container: source.container,
        acl:       source.acl,
        handler:   async params => {
            const $source = withSource(source, params);
            return $source.mapper.toItem.map(await $source.get(params.query.id));
        },
    });
};
