import {
    IPromiseCallback,
    IQueryParams,
    toLink,
    toPromise
}               from "@leight-core/viv";
import {Method} from "axios";

export function createPromise<TRequest, TResponse, TQueryParams extends IQueryParams = any>(link: string, method: Method): IPromiseCallback<TRequest, TResponse, TQueryParams> {
    return (request?, query?, config?) => toPromise<TRequest, TResponse>(method, toLink<TQueryParams>(link, query), request, config);
}
