import {
    Endpoint,
    IApiHandler,
    IContainer,
    IGetEndpoint
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";

export const GetEndpoint = <TContainer extends IContainer, TResponse, TQueryParams extends IQueryParams = IQueryParams>(
    handler: IGetEndpoint<TContainer, TResponse, TQueryParams>,
): IApiHandler<undefined, TResponse, TQueryParams> => Endpoint(handler);
