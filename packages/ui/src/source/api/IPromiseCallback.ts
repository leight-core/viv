import {IQueryParams}       from "@leight/shared";
import {AxiosRequestConfig} from "axios";

export declare type IPromiseCallback<TRequest, TResponse, TQueryParams extends IQueryParams = any> = (request?: TRequest, queryParams?: TQueryParams, config?: AxiosRequestConfig<TRequest>) => Promise<TResponse>;
