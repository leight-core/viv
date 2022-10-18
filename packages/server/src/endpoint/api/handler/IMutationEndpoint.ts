import {
    IContainer,
    IEndpointHandler
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";

/**
 * Mutation endpoint is a general endpoint used to do some server-side effect (some updated data or so).
 *
 * Defaults to POST.
 */
export type IMutationEndpoint<//
    TContainer extends IContainer,
    TRequest,
    TResponse,
    TQueryParams extends IQueryParams = IQueryParams,
    > = IEndpointHandler<TContainer, TRequest, TResponse, TQueryParams>;
