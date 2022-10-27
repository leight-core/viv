import {
    linkTo,
    Url
} from "@leight/utils";
import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    Method
} from "axios";

export class Axios {
    static request<TData, TResponse>(method: Method, url: string, data?: TData, config?: AxiosRequestConfig<TData>) {
        return axios.request<TResponse, AxiosResponse<TResponse>, TData>({
            method,
            url,
            data,
            ...config,
        });
    }

    static link<TRequest, TResponse, TQuery extends Url.IQuery = Url.IQuery>(link: string, method: Method): IPromiseCallback<TRequest, TResponse, TQuery> {
        return (request?, query?, config?) => this.request<TRequest, TResponse>(method, linkTo<TQuery>(link, query), request, config);
    }
}
