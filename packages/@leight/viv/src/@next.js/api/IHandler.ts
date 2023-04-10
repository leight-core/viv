import {type IContainer}    from "../../container";
import {type IHrefQuery}    from "../../utils";
import {type IError}        from "./IError";
import {type IHandlerProps} from "./IHandlerProps";

export interface IHandler<
    TBody = unknown,
    TData = unknown,
    THrefQuery extends IHrefQuery = IHrefQuery
> {
    container: IContainer;
    /**
     * If specified, tokens would be required to access an endpoint.
     */
    withTokens?: string[];

    handler(props: IHandlerProps<TBody, THrefQuery>): Promise<TData | IError>;
}
