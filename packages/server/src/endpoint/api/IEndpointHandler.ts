import {
    IContainer,
    IEndpointRequest
}                     from "@leight/server";
import {IQueryParams} from "@leight/shared";

/**
 * Generic endpoint; SDK generates as POST by default.
 */
export interface IEndpointHandler<//
    TContainer extends IContainer,
    TRequest,
    TResponse,
    TQueryParams extends IQueryParams = any,
    > {
    name: string;

    container(): Promise<TContainer>;

    handler(params: IEndpointRequest<TContainer, TRequest, TResponse, TQueryParams>): Promise<TResponse | void>;

    /**
     * Optional ACLs an endpoint would require on an user.
     */
    acl?: string[];
}
