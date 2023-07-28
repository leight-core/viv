import {type UseQueryOptions} from "@tanstack/react-query";
import {type IUseQueryResult} from "./IUseQueryResult";

export type IUseQuery<
    TRequest,
    TResponse,
> = (request: TRequest, options?: UseQueryOptions<any, any, TResponse, any>) => IUseQueryResult<TResponse>;
