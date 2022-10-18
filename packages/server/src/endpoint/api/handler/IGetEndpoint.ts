import {
    IContainer,
    IEndpointHandler
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";

/**
 * When fetching an individual item, done by GET.
 */
export type IGetEndpoint<//
    TContainer extends IContainer,
    TResponse,
    TQueryParams extends IQueryParams = IQueryParams,
    > = IEndpointHandler<TContainer, undefined, TResponse, TQueryParams>;
