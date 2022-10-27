import {Url}                from "@leight/utils";
import {AxiosRequestConfig} from "axios";

export declare type IPromiseCallback<TRequest, TResponse, TQuery extends Url.IQuery = Url.IQuery> = (request?: TRequest, queryParams?: TQuery, config?: AxiosRequestConfig<TRequest>) => Promise<TResponse>;
