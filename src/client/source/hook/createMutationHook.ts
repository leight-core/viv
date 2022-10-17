import {
    IMutationHook,
    IQueryParams,
    toLink,
    toPromise
}                    from "@leight-core/viv";
import {useMutation} from "@tanstack/react-query";
import {Method}      from "axios";

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
