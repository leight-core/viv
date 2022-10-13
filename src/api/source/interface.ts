import {IQueryParams}       from "@leight-core/api";
import {
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult
}                           from "@tanstack/react-query";
import {AxiosRequestConfig} from "axios";

export type IQueryHook<TRequest, TResponse, TQueryParams extends IQueryParams = any> = (request?: TRequest, queryParams?: TQueryParams, options?: UseQueryOptions<any, any, TResponse, any>, config?: AxiosRequestConfig<TRequest>) => UseQueryResult<TResponse>;
export type IMutationHook<TRequest, TResponse, TQueryParams extends IQueryParams = any> = (queryParams?: TQueryParams, options?: UseMutationOptions<TResponse, any, TRequest>, config?: AxiosRequestConfig<TRequest>) => UseMutationResult<TResponse, any, TRequest>;
export type IPromiseCallback<TRequest, TResponse, TQueryParams extends IQueryParams = any> = (request?: TRequest, queryParams?: TQueryParams, config?: AxiosRequestConfig<TRequest>) => Promise<TResponse>;
export type IHookCallback<TRequest, TResponse, TQueryParams extends IQueryParams = any> = () => IPromiseCallback<TRequest, TResponse, TQueryParams>;

export interface IWithFulltext {
	fulltext?: string;
}

export interface IWithIdentity {
	id: string;
}

export interface IWithIdentityQuery extends IQueryParams {
	id: string;
}
