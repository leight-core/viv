import {type UseMutationResult} from "@tanstack/react-query";
import {type IErrorResponse}    from "../schema/ErrorResponseSchema";

export type IUseMutationResult<TRequest, TResponse> = UseMutationResult<TResponse, IErrorResponse, TRequest>;
