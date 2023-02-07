import {
	IBaseSelectOption,
	IHookCallback,
	IMutationHook,
	IPromiseCallback,
	IQueryHook,
	IQueryParams
} from "@leight-core/api";
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import {QueryClient, useMutation, useQuery, UseQueryResult} from "@tanstack/react-query";
import {persistQueryClient} from "@tanstack/react-query-persist-client";
import axios, {AxiosRequestConfig, AxiosResponse, Method} from "axios";
import {useEffect} from "react";
import {toLink} from "../link";

/**
 * @param cacheTime cache time in hours
 */
export function createQueryClient(cacheTime = 24): QueryClient {
	return new QueryClient({
		defaultOptions: {
			queries: {
				cacheTime: 1000 * 60 * 60 * cacheTime,
				keepPreviousData: true,
			}
		}
	});
}

export function useQueryPersistence(queryClient: QueryClient, name: string, buster?: string, enable: boolean = process.env.NEXT_PUBLIC_CACHE === "true"): boolean {
	useEffect(() => {
		if (!enable) {
			return;
		}
		persistQueryClient({
			queryClient,
			persister: createSyncStoragePersister({storage: window.sessionStorage}),
			buster: buster || process.env.BUILD_ID,
		});
	}, []);
	return enable;
}

export const toPromise = <TRequest, TResponse>(method: Method, url: string, request?: TRequest, config?: AxiosRequestConfig<TRequest>) => new Promise<TResponse>((resolve, reject) => {
	axios.request<TResponse, AxiosResponse<TResponse>, TRequest>({
		method,
		url,
		data: request,
		...config,
	})
		.then(result => resolve(result.data))
		.catch(reject);
});

export function createPromise<TRequest, TResponse, TQueryParams extends IQueryParams = any>(link: string, method: Method): IPromiseCallback<TRequest, TResponse, TQueryParams> {
	return (request?, query?, config?) => toPromise<TRequest, TResponse>(method, toLink<TQueryParams>(link, query), request, config);
}

/**
 * Create react-query hook (~ needs to be used as a hook).
 */
export function createQueryHook<TRequest, TResponse, TQueryParams extends IQueryParams = any>(link: string, method: Method): IQueryHook<TRequest, TResponse, TQueryParams> {
	return (request?, query?, options?, config?) => {
		return useQuery(
			[
				link,
				{query, request},
			],
			() => toPromise<TRequest, TResponse>(method, toLink(link, query), request, config),
			{
				keepPreviousData: true,
				...options,
			}
		);
	};
}

export function createMutationHook<TRequest, TResponse, TQueryParams extends IQueryParams = any>(link: string, method: Method): IMutationHook<TRequest, TResponse, TQueryParams> {
	return (query?, options?, config?) => {
		return useMutation<TResponse, any, TRequest>([
			"mutation",
			link,
			method,
			{query}
		], request => toPromise<TRequest, TResponse>(method, toLink(link, query), request, config), options);
	};
}

/**
 * Returned method must be used as a hook, but later on requests can be made arbitrary.
 */
export function createPromiseHook<TRequest, TResponse, TQueryParams extends IQueryParams = any>(link: string, method: Method): IHookCallback<TRequest, TResponse, TQueryParams> {
	/**
	 * Factory context, nothing interesting here.
	 */
	return () => createPromise(link, method);
}

export const toOption = <TOption extends IBaseSelectOption = IBaseSelectOption>(item: TOption) => item;

export const promiseOf = async <TResponse>(query: UseQueryResult<TResponse[]>): Promise<TResponse[]> => new Promise<TResponse[]>((resolve, reject) => {
	const interval = setInterval(() => {
		if (query.isSuccess) {
			setTimeout(() => resolve(query.data), 0);
			clearInterval(interval);
		} else if (query.isError) {
			setTimeout(() => reject(query.error), 0);
			clearInterval(interval);
		}
	}, 250);
});
