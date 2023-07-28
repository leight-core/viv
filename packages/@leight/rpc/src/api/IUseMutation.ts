import {type UseMutationOptions} from "@tanstack/react-query";
import {type IUseMutationResult} from "./IUseMutationResult";

export type IUseMutation<
    TRequest,
    TResponse,
> = (options?: UseMutationOptions<TResponse, any, TRequest>) => IUseMutationResult<TRequest, TResponse>;
