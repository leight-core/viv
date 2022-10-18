import {
    IContainer,
    INextApiRequest
}                        from "@leight/server";
import {IQueryParams}    from "@leight/shared";
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
    readonly container: TContainer;

    toBody(): Promise<Buffer>;

    end(chunk?: any): void;
}
