import {
    Endpoint,
    IApiHandler,
    IContainer,
    IEntityEndpoint
} from "@leight/server";
import {
    IQuery,
    IQueryParams
} from "@leight/shared";

export const EntityEndpoint = <TContainer extends IContainer, TRequest extends IQuery, TResponse, TQueryParams extends IQueryParams = IQueryParams>(
    handler: IEntityEndpoint<TContainer, TRequest, TResponse, TQueryParams>,
): IApiHandler<TRequest, TResponse, TQueryParams> => Endpoint(handler);
