import {type IUseQuery}       from "@leight/query";
import {type IRequestSchema}  from "../schema/RequestSchema";
import {type IResponseSchema} from "../schema/ResponseSchema";
import {type IInvalidator}    from "./IInvalidator";

/**
 * This is a base object containing everything you need to use an RPC query.
 */
export interface IWithQuery<TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema> {
    key: string[];
    service: string;
    schema: {
        request: TRequestSchema,
        response: TResponseSchema,
    };
    useInvalidator: IInvalidator.Use;

    useQuery: IUseQuery<TRequestSchema, TResponseSchema>;
}
