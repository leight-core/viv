import {type IContainer}   from "../../container";
import {type INextHandler} from "./INextHandler";

export type IEndpointFactory<TResponse> = (
    container: IContainer,
    withTokens?: string[]
) => INextHandler<TResponse>;
