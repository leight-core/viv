import {type IUseQuery}       from "@leight/query";
import {type IRequestSchema}  from "../schema/RequestSchema";
import {type IResponseSchema} from "../schema/ResponseSchema";
import {type IInvalidator}    from "./IInvalidator";

/**
 * This is a base object containing everything you need to use an RPC query.
 */
export interface IWithQuery<TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema> {
    /**
     * Query key used in React Query
     */
    key: string[];
    /**
     * Target service being called
     */
    service: string;
    /**
     * This is obvious, isn't it?
     */
    schema: {
        request: TRequestSchema,
        response: TResponseSchema,
    };
    /**
     * Invalidator hook used to generate invalidator for this query
     */
    useInvalidator: IInvalidator.Use;
    /**
     * Simple useQuery, basically the same as useQuery in React Query; goal is to
     * provide already setup hook, which could be used to get data, eventually driven
     * by other hooks (cursor, filter, ...).
     */
    useQuery: IUseQuery.Use<TResponseSchema>;
    /**
     * Extended (low-level) useQuery without any other dependencies.
     */
    useQueryEx: IUseQuery.UseEx<TRequestSchema, TResponseSchema>;
}
