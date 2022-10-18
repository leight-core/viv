import {IQueryParams}     from "@leight/shared";
import {IPromiseCallback} from "@leight/ui";

export declare type IHookCallback<TRequest, TResponse, TQueryParams extends IQueryParams = any> = () => IPromiseCallback<TRequest, TResponse, TQueryParams>;
