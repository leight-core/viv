import {
    createPromise,
    IHookCallback,
    IQueryParams
}               from "@leight/ui";
import {Method} from "axios";

/**
 * Returned method must be used as a hook, but later on requests can be made arbitrary.
 */
export function createPromiseHook<TRequest, TResponse, TQueryParams extends IQueryParams = any>(link: string, method: Method): IHookCallback<TRequest, TResponse, TQueryParams> {
    /**
     * Factory context, nothing interesting here.
     */
    return () => createPromise(link, method);
}
