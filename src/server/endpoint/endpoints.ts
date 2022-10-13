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
	SourceInfer
}                 from "@leight-core/api";
import {
	Logger,
	User,
	withMetrics
}                 from "@leight-core/server";
import {getToken} from "next-auth/jwt";
import getRawBody from "raw-body";

export interface IEndpointSource<//
	TContainer extends IContainer,
	TSource extends ISource<any, any, any>,
	TQueryParams extends IQueryParams = any> {
	name: string;

	acl?: string[];

	container(): Promise<TContainer>;

	source(params: IEndpointRequest<TContainer, SourceInfer.Query<TSource>, number, TQueryParams>): TSource;
}

const withSource = <//
	TContainer extends IContainer,
	TSource extends ISource<any, any, any>,
	TQueryParams extends IQueryParams = any,
	>({source}: IEndpointSource<TContainer, TSource, TQueryParams>, params: IEndpointRequest<TContainer, any, any, TQueryParams>) => {
	const $source = source(params);
	$source.container.withUser(params.user);
	return $source;
};

export const Endpoint = <//
	TContainer extends IContainer,
	TRequest,
	TResponse,
	TQueryParams extends IQueryParams = any,
	>(
	{container, handler, acl}: IEndpointHandler<TContainer, TRequest, TResponse, TQueryParams>,
): IApiHandler<TRequest, TResponse, TQueryParams> => {
	const logger = Logger("endpoint");
	return withMetrics(async (req, res) => {
		const token  = await getToken({req});
		const timer  = logger.startTimer();
		const labels = {url: req.url, userId: token?.sub};
		logger.debug("Endpoint Call", {labels, url: req.url, body: req.body});
		try {
			const user = User({
				userId: token?.sub,
				tokens: (token as any)?.tokens,
			});
			user.checkAny(acl);
			const run      = async () => await handler({
				container: (await container()).withUser(user),
				req,
				res,
				request:   req.body,
				query:     req.query,
				toBody:    () => getRawBody(req),
				end:       res.end,
				user,
			});
			const response = await run();
			logger.debug("Endpoint Call Response", {labels, url: req.url});
			response !== undefined && res.status(200).json(response);
		} catch (e) {
			console.log(e);
			if (e instanceof AclError) {
				console.log("ACL Exception: Tokens", e.tokens, "Requested tokens", e.requested);
				res.status(e.code).end(e.message);
				return;
			} else if (e instanceof ClientError) {
				res.status(e.code).end(e.message);
				return;
			}
			logger.error("Endpoint Exception", {labels, url: req.url, body: req.body});
			if (e instanceof Error) {
				logger.error(e.message, {labels, url: req.url, body: req.body});
				e.stack && logger.error(e.stack, {labels, url: req.url, body: req.body});
				if (e.message.includes("Unknown user; missing token.")) {
					res.status(403).end("Nope.");
					return;
				}
			}
			res.status(500).end("A request failed with Internal Server Error.");
		} finally {
			timer.done({
				level:   "debug",
				message: "Endpoint Call Done",
				labels,
				url:     req.url,
			});
		}
	});
};

export const ListEndpoint = <TContainer extends IContainer, TResponse, TQueryParams extends IQueryParams = any>(
	handler: IListEndpoint<TContainer, TResponse, TQueryParams>,
): IApiHandler<undefined, TResponse, TQueryParams> => Endpoint(handler);

export const MutationEndpoint = <TContainer extends IContainer, TRequest, TResponse, TQueryParams extends IQueryParams = any>(
	handler: IMutationEndpoint<TContainer, TRequest, TResponse, TQueryParams>,
): IApiHandler<TRequest, TResponse, TQueryParams> => Endpoint(handler);

export const GetEndpoint = <TContainer extends IContainer, TResponse, TQueryParams extends IQueryParams = any>(
	handler: IGetEndpoint<TContainer, TResponse, TQueryParams>,
): IApiHandler<undefined, TResponse, TQueryParams> => Endpoint(handler);

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
