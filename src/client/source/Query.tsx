import {
	IEntityContext,
	IQueryHook,
	IQueryParams
}                        from "@leight-core/api";
import {UseQueryOptions} from "@tanstack/react-query";
import {
	ReactNode,
	useEffect
}                        from "react";

export interface IQueryProps<TRequest, TResponse, TQueryParams extends IQueryParams = any> {
	useQuery: IQueryHook<TRequest, TResponse, TQueryParams>;
	request: TRequest;
	queryParams?: TQueryParams;
	options?: UseQueryOptions<any, any, TResponse>;
	/**
	 * Actual children rendered when data are available.
	 */
	children?: (data: TResponse) => ReactNode;
	/**
	 * Placeholder rendered when data are not available.
	 */
	placeholder?: () => ReactNode;
	context?: IEntityContext<TResponse> | null;
	onUpdate?: (entity: TResponse) => void;
}

export const Query = <TRequest, TResponse, TQueryParams extends IQueryParams = any>(
	{
		useQuery,
		request,
		queryParams,
		options,
		children = () => undefined,
		context,
		onUpdate,
		placeholder = () => null,
	}: IQueryProps<TRequest, TResponse, TQueryParams>) => {
	const result = useQuery(request, queryParams, options);
	useEffect(() => {
		context && result.data && context.update(result.data);
		result.data && onUpdate?.(result.data);
	}, [result.data]);
	return <>
		{context ?
			(context.entity ? children(context.entity) : placeholder()) :
			(result.isSuccess ? children(result.data) : placeholder())
		}
	</>;
};
