import {IQueryParams}       from "@leight/shared";
import {
    UseQueryOptions,
    UseQueryResult
}                           from "@tanstack/react-query";
import {AxiosRequestConfig} from "axios";

export declare type IQueryHook<TRequest, TResponse, TQueryParams extends IQueryParams = IQueryParams> = (request?: TRequest, queryParams?: TQueryParams, options?: UseQueryOptions<any, any, TResponse, any>, config?: AxiosRequestConfig<TRequest>) => UseQueryResult<TResponse>;
