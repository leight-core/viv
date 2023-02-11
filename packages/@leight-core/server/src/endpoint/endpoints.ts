import {
	AclError,
	ClientError,
	IContainer,
	IEndpoint,
	IEndpointCallback,
	IEndpointParams,
	IEntityEndpoint,
	IGetEndpoint,
	IListEndpoint,
	IMutationEndpoint,
	InferSource,
	IQuery,
	IQueryParams,
	IRequestEndpoint,
	ISource,
	IWithIdentityQuery
}                 from "@leight-core/api";
import {getToken} from "next-auth/jwt";
import getRawBody from "raw-body";
import {User}     from "../user";

export interface IEndpointSource<//
	TSource extends ISource<any, any, any>,
	TQueryParams extends IQueryParams = any,
	TContainer extends IContainer = IContainer,
> {
	container: () => Promise<TContainer>;

	acl?: string[];

	source(params: IEndpointParams<InferSource.Query<TSource>, number, TQueryParams>): TSource;
}

const withSource = <TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>({source}: IEndpointSource<TSource, TQueryParams>, params: IEndpointParams<any, any, TQueryParams>) => {
	return source(params).container.withUser(params.user);
};

export const Endpoint = <TName extends string, TRequest, TResponse, TQueryParams extends IQueryParams = any>(
	{container, handler, acl}: IEndpoint<TName, TRequest, TResponse, TQueryParams>,
): IEndpointCallback<TName, TRequest, TResponse, TQueryParams> => {
	return async (req, res) => {
		const token  = await getToken({req});
		const labels = {url: req.url, userId: token?.sub};
		try {
			const user = User({
				userId: token?.sub,
				tokens: (token as any)?.tokens,
			});
			user.checkAny(acl);
			const run      = async () => handler({
				container: await container(),
				req,
				res,
				request:   req.body,
				query:     req.query,
				toBody:    () => getRawBody(req),
				end:       res.end,
				user,
			});
			const response = await run();
			response !== undefined && res.status(200).json(response);
		} catch (e) {
			console.log(e);
			if (e instanceof AclError) {
				console.log("ACL Exception: Tokens", e.tokens, "Requested tokens", e.requested);
				res.status(e.code).end(e.message);
			}
			if (e instanceof ClientError) {
				res.status(e.code).end(e.message);
				return;
			}
			if (e instanceof Error) {
				if (e.message.includes("Unknown user; missing token.")) {
					res.status(403).end("Nope.");
					return;
				}
			}
			res.status(500).end("A request failed with Internal Server Error.");
		}
	};
};

export const ListEndpoint = <TName extends string, TResponse, TQueryParams extends IQueryParams = any>(
	handler: IListEndpoint<TName, TResponse, TQueryParams>,
): IEndpointCallback<TName, undefined, TResponse, TQueryParams> => Endpoint(handler);

export const MutationEndpoint = <TName extends string, TRequest, TResponse, TQueryParams extends IQueryParams = any>(
	handler: IMutationEndpoint<TName, TRequest, TResponse, TQueryParams>,
): IEndpointCallback<TName, TRequest, TResponse, TQueryParams> => Endpoint(handler);

export const GetEndpoint = <TName extends string, TResponse, TQueryParams extends IQueryParams = any>(
	handler: IGetEndpoint<TName, TResponse, TQueryParams>,
): IEndpointCallback<TName, undefined, TResponse, TQueryParams> => Endpoint(handler);

export const FetchEndpoint = <TName extends string, TSource extends ISource<any, any, any>>(
	source: IEndpointSource<TSource>,
): IEndpointCallback<TName, undefined, InferSource.Item<TSource>, IWithIdentityQuery> => {
	return Endpoint({
		container: source.container,
		acl:       source.acl,
		handler:   async params => {
			const $source = withSource(source, params);
			return $source.map(await $source.get(params.query.id));
		},
	});
};

export const CreateEndpoint = <TName extends string, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(
	source: IEndpointSource<TSource, TQueryParams>,
): IEndpointCallback<TName, InferSource.Create<TSource>, InferSource.Item<TSource>, TQueryParams> => {
	return Endpoint({
		container: source.container,
		acl:       source.acl,
		handler:   async params => {
			const $source = withSource(source, params);
			return $source.map(await $source.create(params.request));
		},
	});
};

export const PatchEndpoint = <TName extends string, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(
	source: IEndpointSource<TSource, TQueryParams>,
): IEndpointCallback<TName, InferSource.Patch<TSource>, InferSource.Item<TSource>, TQueryParams> => {
	return Endpoint({
		container: source.container,
		acl:       source.acl,
		handler:   async params => {
			const $source = withSource(source, params);
			return $source.map(await $source.patch(params.request));
		},
	});
};

export const CountEndpoint = <TName extends string, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(
	source: IEndpointSource<TSource, TQueryParams>,
): IEndpointCallback<TName, InferSource.Query<TSource>, number, TQueryParams> => {
	return Endpoint({
		container: source.container,
		acl:       source.acl,
		handler:   async params => withSource(source, params).count(params.request),
	});
};

export const QueryEndpoint = <TName extends string, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(
	source: IEndpointSource<TSource, TQueryParams>,
): IEndpointCallback<TName, InferSource.Query<TSource>, InferSource.Item<TSource>[], TQueryParams> => {
	return Endpoint({
		container: source.container,
		acl:       source.acl,
		handler:   async params => {
			const $source = withSource(source, params);
			return $source.list($source.query(params.request));
		},
	});
};

export const EntityEndpoint = <TName extends string, TRequest extends IQuery, TResponse, TQueryParams extends IQueryParams = any>(
	handler: IEntityEndpoint<TName, TRequest, TResponse, TQueryParams>,
): IEndpointCallback<TName, TRequest, TResponse, TQueryParams> => Endpoint(handler);

export const DeleteEndpoint = <TName extends string, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(
	source: IEndpointSource<TSource, TQueryParams>,
): IEndpointCallback<TName, string[], InferSource.Item<TSource>[], TQueryParams> => {
	return Endpoint({
		container: source.container,
		acl:       source.acl,
		handler:   async params => withSource(source, params).remove(params.request),
	});
};

export const RequestEndpoint = <TName extends string, TRequest, TResponse, TQueryParams extends IQueryParams = any>(
	handler: IRequestEndpoint<TName, TRequest, TResponse, TQueryParams>,
): IEndpointCallback<TName, TRequest, TResponse, TQueryParams> => Endpoint(handler);
