import {type UseQueryOptions} from "@tanstack/react-query";
import {type IErrorResponse}  from "../schema/ErrorResponseSchema";

export interface IQueryOptions<TResponse, TRequest = never> {
    request: TRequest;
    options?: Omit<UseQueryOptions<any, IErrorResponse, TResponse, string[]>, "queryFn">;
}
