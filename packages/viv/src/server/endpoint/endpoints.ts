import {
    AclError,
    ClientError,
    IApiHandler,
    IContainer,
    IEndpointHandler,
    IEndpointRequest,
    IEntityEndpoint,
    IGetEndpoint,
    IListEndpoint,
    IMutationEndpoint,
    IQuery,
    IQueryParams,
    IRequestEndpoint,
    ISource,
    IWithIdentityQuery,
    Logger,
    SourceInfer,
    User,
    withMetrics
} from "@leight/viv";


const withSource = <//
    TContainer extends IContainer,
    TSource extends ISource<any, any, any>,
    TQueryParams extends IQueryParams = any,
    >({source}: IEndpointSource<TContainer, TSource, TQueryParams>, params: IEndpointRequest<TContainer, any, any, TQueryParams>) => {
    const $source = source(params);
    $source.container.withUser(params.user);
    return $source;
};

export const FetchEndpoint = <TContainer extends IContainer, TSource extends ISource<any, any, any>>(
    source: IEndpointSource<TContainer, TSource, IWithIdentityQuery>,
): IApiHandler<undefined, SourceInfer.Item<TSource>, IWithIdentityQuery> => {
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

export const CreateEndpoint = <TContainer extends IContainer, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(
    source: IEndpointSource<TContainer, TSource, TQueryParams>,
): IApiHandler<SourceInfer.Create<TSource>, SourceInfer.Item<TSource>, TQueryParams> => {
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

export const PatchEndpoint = <TContainer extends IContainer, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(
    source: IEndpointSource<TContainer, TSource, TQueryParams>,
): IApiHandler<SourceInfer.Patch<TSource>, SourceInfer.Item<TSource>, TQueryParams> => {
    return Endpoint({
        name:      source.name,
        container: source.container,
        acl:       source.acl,
        handler:   async params => {
            const $source = withSource(source, params);
            return $source.mapper.toItem.map(await $source.patch(params.request));
        },
    });
};

export const CountEndpoint = <TContainer extends IContainer, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(
    source: IEndpointSource<TContainer, TSource, TQueryParams>,
): IApiHandler<SourceInfer.Query<TSource>, number, TQueryParams> => {
    return Endpoint({
        name:      source.name,
        container: source.container,
        acl:       source.acl,
        handler:   async params => withSource(source, params).count(params.request),
    });
};

export const QueryEndpoint = <TContainer extends IContainer, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(
    source: IEndpointSource<TContainer, TSource, TQueryParams>,
): IApiHandler<SourceInfer.Query<TSource>, SourceInfer.Item<TSource>[], TQueryParams> => {
    return Endpoint({
        name:      source.name,
        container: source.container,
        acl:       source.acl,
        handler:   async params => {
            const $source = withSource(source, params);
            return $source.mapper.toItem.list($source.query(params.request));
        },
    });
};

export const EntityEndpoint = <TContainer extends IContainer, TRequest extends IQuery, TResponse, TQueryParams extends IQueryParams = any>(
    handler: IEntityEndpoint<TContainer, TRequest, TResponse, TQueryParams>,
): IApiHandler<TRequest, TResponse, TQueryParams> => Endpoint(handler);

export const DeleteEndpoint = <TContainer extends IContainer, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(
    source: IEndpointSource<TContainer, TSource, TQueryParams>,
): IApiHandler<string[], SourceInfer.Item<TSource>[], TQueryParams> => {
    return Endpoint({
        name:      source.name,
        container: source.container,
        acl:       source.acl,
        handler:   async params => withSource(source, params).remove(params.request),
    });
};

export const RequestEndpoint = <TContainer extends IContainer, TRequest, TResponse, TQueryParams extends IQueryParams = any>(
    handler: IRequestEndpoint<TContainer, TRequest, TResponse, TQueryParams>,
): IApiHandler<TRequest, TResponse, TQueryParams> => Endpoint(handler);
