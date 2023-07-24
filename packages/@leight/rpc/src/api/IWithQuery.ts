import {z}                    from "@leight/utils";
import {type IRequestSchema}  from "../schema/RequestSchema";
import {type IResponseSchema} from "../schema/ResponseSchema";
import {type IQueryOptions}   from "./IQueryOptions";
import {type IUseQueryResult} from "./IUseQueryResult";

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

    useQuery(props: IQueryOptions<z.infer<TResponseSchema>, z.infer<TRequestSchema>>): IUseQueryResult<TResponseSchema>;
}
