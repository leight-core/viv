import {
    IQueryHook,
    IQueryParams,
    toLink,
    toPromise
}                 from "@leight/viv";
import {useQuery} from "@tanstack/react-query";
import {Method}   from "axios";

/**
 * Create react-query hook (~ needs to be used as a hook).
 */
export function createQueryHook<TRequest, TResponse, TQueryParams extends IQueryParams = any>(link: string, method: Method): IQueryHook<TRequest, TResponse, TQueryParams> {
    return (request?, query?, options?, config?) => {
        return useQuery(
            [
                link,
                {query, request}
            ],
            () => toPromise<TRequest, TResponse>(method, toLink(link, query), request, config),
            {
                keepPreviousData: true,
                ...options,
            }
        );
    };
}
