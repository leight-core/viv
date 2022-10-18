import {
    IContainer,
    IEndpointHandler
} from "@leight/server";
import {
    IQuery,
    IQueryParams
} from "@leight/shared";

export type IEntityEndpoint<//
    TContainer extends IContainer,
    TRequest extends IQuery | undefined,
    TResponse,
    TQueryParams extends IQueryParams = IQueryParams,
    > = IEndpointHandler<TContainer, TRequest, TResponse, TQueryParams>;
