import {type UseMutationOptions} from "@tanstack/react-query";
import {type IErrorResponse}     from "../schema/ErrorResponseSchema";

export type IMutationOptions<TRequest, TResponse> = Omit<UseMutationOptions<TResponse, IErrorResponse, TRequest>, "mutationFn">;
