import {type UseMutationResult} from "@tanstack/react-query";

export type IUseMutationResult<TRequest, TResponse> = UseMutationResult<TResponse, any, TRequest>;
