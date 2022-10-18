import {
    IContainer,
    IEndpointHandler
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";

/**
 * When fetching a list of items (arrayed by default), done by GET.
 */
export type IListEndpoint<//
    TContainer extends IContainer,
    TResponse,
    TQueryParams extends IQueryParams = IQueryParams,
    > = IEndpointHandler<TContainer, undefined, TResponse, TQueryParams>;
