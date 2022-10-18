import {IQueryParams}       from "@leight/shared";
import {
    UseMutationOptions,
    UseMutationResult
}                           from "@tanstack/react-query";
import {AxiosRequestConfig} from "axios";

export declare type IMutationHook<TRequest, TResponse, TQueryParams extends IQueryParams = any> = (queryParams?: TQueryParams, options?: UseMutationOptions<TResponse, any, TRequest>, config?: AxiosRequestConfig<TRequest>) => UseMutationResult<TResponse, any, TRequest>;
