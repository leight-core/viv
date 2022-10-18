import {
    Endpoint,
    IApiHandler,
    IContainer,
    IMutationEndpoint
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";

export const MutationEndpoint = <TContainer extends IContainer, TRequest, TResponse, TQueryParams extends IQueryParams = IQueryParams>(
    handler: IMutationEndpoint<TContainer, TRequest, TResponse, TQueryParams>,
): IApiHandler<TRequest, TResponse, TQueryParams> => Endpoint(handler);
