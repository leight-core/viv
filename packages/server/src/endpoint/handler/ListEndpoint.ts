import {
    Endpoint,
    IApiHandler,
    IContainer,
    IListEndpoint
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";

export const ListEndpoint = <TContainer extends IContainer, TResponse, TQueryParams extends IQueryParams = IQueryParams>(
    handler: IListEndpoint<TContainer, TResponse, TQueryParams>,
): IApiHandler<undefined, TResponse, TQueryParams> => Endpoint(handler);
