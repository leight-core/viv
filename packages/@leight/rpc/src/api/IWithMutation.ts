import {type IUseMutation}    from "@leight/query";
import {type IRequestSchema}  from "../schema/RequestSchema";
import {type IResponseSchema} from "../schema/ResponseSchema";
import {type IInvalidator}    from "./IInvalidator";

export interface IWithMutation<TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema> {
    key: string[];
    service: string;
    schema: {
        request: TRequestSchema,
        response: TResponseSchema,
    };
    useInvalidator: IInvalidator.Use;
    useMutation: IUseMutation.Use<TRequestSchema, TResponseSchema>;
}
