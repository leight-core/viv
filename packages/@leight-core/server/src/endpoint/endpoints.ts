import {
	AclError,
	ClientError,
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
} from "@leight-core/api";

export interface IEndpointSource<//
	TSource extends ISource<any, any, any>,
	TQueryParams extends IQueryParams = any,
> {
	source(params: IEndpointParams<InferSource.Query<TSource>, number, TQueryParams>): TSource;
}

export const Endpoint = <TName extends string, TRequest, TResponse, TQueryParams extends IQueryParams = any>(
	{handler}: IEndpoint<TName, TRequest, TResponse, TQueryParams>,
): IEndpointCallback<TName, TRequest, TResponse, TQueryParams> => {
	return async (req, res) => {
		try {
			const run      = async () => handler({
				req,
				res,
				request: req.body,
				query:   req.query,
				end:     res.end,
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

export const FetchEndpoint = <TName extends string, TSource extends ISource<any, any, any>>(): IEndpointCallback<TName, undefined, InferSource.Item<TSource>, IWithIdentityQuery> => {
	return Endpoint({
		handler: async () => null as any,
	});
};

export const CreateEndpoint = <TName extends string, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(): IEndpointCallback<TName, InferSource.Create<TSource>, InferSource.Item<TSource>, TQueryParams> => {
	return Endpoint({
		handler: async () => null as any,
	});
};

export const PatchEndpoint = <TName extends string, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(): IEndpointCallback<TName, InferSource.Patch<TSource>, InferSource.Item<TSource>, TQueryParams> => {
	return Endpoint({
		handler: async () => null as any,
	});
};

export const CountEndpoint = <TName extends string, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(): IEndpointCallback<TName, InferSource.Query<TSource>, number, TQueryParams> => {
	return Endpoint({
		handler: async () => null as any,
	});
};

export const QueryEndpoint = <TName extends string, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(): IEndpointCallback<TName, InferSource.Query<TSource>, InferSource.Item<TSource>[], TQueryParams> => {
	return Endpoint({
		handler: async () => null as any,
	});
};

export const EntityEndpoint = <TName extends string, TRequest extends IQuery, TResponse, TQueryParams extends IQueryParams = any>(
	handler: IEntityEndpoint<TName, TRequest, TResponse, TQueryParams>,
): IEndpointCallback<TName, TRequest, TResponse, TQueryParams> => Endpoint(handler);

export const DeleteEndpoint = <TName extends string, TSource extends ISource<any, any, any>, TQueryParams extends IQueryParams = any>(): IEndpointCallback<TName, string[], InferSource.Item<TSource>[], TQueryParams> => {
	return Endpoint({
		handler: async () => null as any,
	});
};

export const RequestEndpoint = <TName extends string, TRequest, TResponse, TQueryParams extends IQueryParams = any>(
	handler: IRequestEndpoint<TName, TRequest, TResponse, TQueryParams>,
): IEndpointCallback<TName, TRequest, TResponse, TQueryParams> => Endpoint(handler);
