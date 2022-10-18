import {
    IApiHandler,
    IContainer,
    IEndpointHandler,
    Logger
}                 from "@leight/server";
import {
    AclError,
    ClientError,
    IQueryParams,
    User
}                 from "@leight/shared";
import {getToken} from "next-auth/jwt";
import getRawBody from "raw-body";

export const Endpoint = <//
    TContainer extends IContainer,
    TRequest,
    TResponse,
    TQueryParams extends IQueryParams = IQueryParams,
    >(
    {container, handler, acl}: IEndpointHandler<TContainer, TRequest, TResponse, TQueryParams>,
): IApiHandler<TRequest, TResponse, TQueryParams> => async (req, res) => {
    const logger = Logger("endpoint");
    const token  = await getToken({req});
    const timer  = logger.startTimer();
    const labels = {url: req.url, userId: token?.sub};
    logger.debug("Endpoint Call", {labels, url: req.url, body: req.body});
    try {
        const user = User({
            userId: token?.sub,
            tokens: (token as any)?.tokens,
        });
        user.checkAny(acl);
        const run      = async () => await handler({
            container: (await container()).withUser(user),
            req,
            res,
            request:   req.body,
            query:     req.query,
            toBody:    () => getRawBody(req),
            end:       res.end,
        });
        const response = await run();
        logger.debug("Endpoint Call Response", {labels, url: req.url});
        response !== undefined && res.status(200).json(response);
    } catch (e) {
        console.log(e);
        if (e instanceof AclError) {
            console.log("ACL Exception: Tokens", e.tokens, "Requested tokens", e.requested);
            res.status(e.code).end(e.message);
            return;
        } else if (e instanceof ClientError) {
            res.status(e.code).end(e.message);
            return;
        }
        logger.error("Endpoint Exception", {labels, url: req.url, body: req.body});
        if (e instanceof Error) {
            logger.error(e.message, {labels, url: req.url, body: req.body});
            e.stack && logger.error(e.stack, {labels, url: req.url, body: req.body});
            if (e.message.includes("Unknown user; missing token.")) {
                res.status(403).end("Nope.");
                return;
            }
        }
        res.status(500).end("A request failed with Internal Server Error.");
    } finally {
        timer.done({
            level:   "debug",
            message: "Endpoint Call Done",
            labels,
            url:     req.url,
        });
    }
};
