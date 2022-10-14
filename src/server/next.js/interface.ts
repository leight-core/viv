import {IQueryParams} from "@leight-core/viv";
import {
    NextApiRequest,
    NextApiResponse
}                     from "next";

/**
 * Just a bit better typing for NextApiRequest.
 */
export interface INextApiRequest<//
    TQuery extends IQueryParams = any,
    TRequest = undefined,
    > extends Omit<NextApiRequest, "query"> {
    readonly query: TQuery;
    readonly body: TRequest;
}

/**
 * Just typed standard Next.js API handler.
 */
export type IApiHandler<//
    TRequest,
    TResponse,
    TQueryParams extends IQueryParams,
    > = (req: INextApiRequest<TQueryParams, TRequest>, res: NextApiResponse<TResponse>) => void;
