import {
    IContainer,
    INextApiRequest,
    IQuery,
    IQueryParams,
    IUser
}                        from "@leight/viv";
import {NextApiResponse} from "next";

/**
 * This is what an Endpoint get when processing a request.
 */
export interface IEndpointRequest<//
    TContainer extends IContainer,
    TRequest,
    TResponse,
    TQueryParams extends IQueryParams = any,
    > {
    readonly req: INextApiRequest<TQueryParams, TRequest>;
    readonly res: NextApiResponse<TResponse>;
    readonly request: TRequest;
    readonly query: TQueryParams;
    readonly user: IUser;
    readonly container: TContainer;

    toBody(): Promise<Buffer>;

    end(chunk?: any): void;
}

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

/**
 * When fetching an individual item, done by GET.
 */
export type IGetEndpoint<//
    TContainer extends IContainer,
    TResponse,
    TQueryParams extends IQueryParams = any,
    > = IEndpointHandler<TContainer, undefined, TResponse, TQueryParams>;

/**
 * When fetching a list of items (arrayed by default), done by GET.
 */
export type IListEndpoint<//
    TContainer extends IContainer,
    TResponse,
    TQueryParams extends IQueryParams = any,
    > = IEndpointHandler<TContainer, undefined, TResponse, TQueryParams>;

/**
 * Mutation endpoint is a general endpoint used to do some server-side effect (some updated data or so).
 *
 * Defaults to POST.
 */
export type IMutationEndpoint<//
    TContainer extends IContainer,
    TRequest,
    TResponse,
    TQueryParams extends IQueryParams = any,
    > = IEndpointHandler<TContainer, TRequest, TResponse, TQueryParams>;

export type IEntityEndpoint<//
    TContainer extends IContainer,
    TRequest extends IQuery | undefined,
    TResponse,
    TQueryParams extends IQueryParams = any,
    > = IEndpointHandler<TContainer, TRequest, TResponse, TQueryParams>;

/**
 * Generic request/response.
 */
export type IRequestEndpoint<//
    TContainer extends IContainer,
    TRequest,
    TResponse,
    TQueryParams extends IQueryParams = any,
    > = IEndpointHandler<TContainer, TRequest, TResponse, TQueryParams>;

export class ClientError extends Error {
    readonly code: number;

    constructor(message: string, code = 400) {
        super(message);
        this.code = code;
    }
}
