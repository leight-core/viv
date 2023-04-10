import type {
    NextApiRequest,
    NextApiResponse
}                        from "next";
import {type IContainer} from "../../container";
import {
    type ITokenService,
    type IUserService
}                        from "../../user";
import {type IHrefQuery} from "../../utils";

export interface IHandlerProps<
    TBody = unknown,
    THrefQuery extends IHrefQuery = IHrefQuery
> {
    container: IContainer;
    request: NextApiRequest;
    body: TBody;
    query: THrefQuery;
    response: NextApiResponse;
    /**
     * Access to current user's tokens.
     */
    tokenService: ITokenService;
    /**
     * Access to current user.
     */
    userService: IUserService;

    toBody(): Promise<Buffer>;

    end(chunk?: unknown): void;
}
