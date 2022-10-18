import {INextApiRequest} from "@leight/server";
import {IQueryParams}    from "@leight/shared";
import {NextApiResponse} from "next";

/**
 * Just typed standard Next.js API handler.
 */
export type IApiHandler<//
    TRequest,
    TResponse,
    TQueryParams extends IQueryParams,
    > = (req: INextApiRequest<TQueryParams, TRequest>, res: NextApiResponse<TResponse>) => void;
