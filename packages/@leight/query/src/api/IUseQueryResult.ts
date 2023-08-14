import {type UseQueryResult} from "@tanstack/react-query";
import {type IErrorResponse} from "../schema/ErrorResponseSchema";

export type IUseQueryResult<TResponse> = UseQueryResult<TResponse, IErrorResponse>;
