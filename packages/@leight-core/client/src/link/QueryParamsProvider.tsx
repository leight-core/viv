import {IQueryParams}       from "@leight-core/api";
import {
	PropsWithChildren,
	useState
}                           from "react";
import {QueryParamsContext} from "./QueryParamsContext";

export interface IQueryParamsProviderProps<TQueryParams extends IQueryParams | void = void> {
	/**
	 * Default pre-set query params; could be overridden by a user. Apply query prop takes precedence.
	 */
	defaultQueryParams?: TQueryParams;
	/**
	 * Apply the given query all the times (regardless of values set by a user)
	 */
	applyQueryParams?: TQueryParams;
}

export function QueryParamsProvider<TQueryParams extends IQueryParams | void = void>(
	{
		defaultQueryParams,
		applyQueryParams,
		...props
	}: PropsWithChildren<IQueryParamsProviderProps<TQueryParams>>) {
	const [queryParams, setQueryParams] = useState<TQueryParams | undefined>(applyQueryParams || defaultQueryParams);
	return <QueryParamsContext.Provider
		value={{
			queryParams,
			setQueryParams: queryParams => setQueryParams({...queryParams, ...applyQueryParams}),
		}}
		{...props}
	/>;
}
