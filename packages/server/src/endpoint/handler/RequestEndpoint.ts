import {
    Endpoint,
    IApiHandler,
    IContainer,
    IRequestEndpoint
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";

export const RequestEndpoint = <TContainer extends IContainer, TRequest, TResponse, TQueryParams extends IQueryParams = IQueryParams>(
    handler: IRequestEndpoint<TContainer, TRequest, TResponse, TQueryParams>,
): IApiHandler<TRequest, TResponse, TQueryParams> => Endpoint(handler);
