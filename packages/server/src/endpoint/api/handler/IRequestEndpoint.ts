import {
    IContainer,
    IEndpointHandler
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";

/**
 * Generic request/response.
 */
export type IRequestEndpoint<//
    TContainer extends IContainer,
    TRequest,
    TResponse,
    TQueryParams extends IQueryParams = IQueryParams,
    > = IEndpointHandler<TContainer, TRequest, TResponse, TQueryParams>;
