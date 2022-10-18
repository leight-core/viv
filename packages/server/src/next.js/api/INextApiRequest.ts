import {IQueryParams}   from "@leight/shared";
import {NextApiRequest} from "next";

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
