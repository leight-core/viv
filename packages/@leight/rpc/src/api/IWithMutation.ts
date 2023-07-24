import {z}                       from "@leight/utils";
import {type IRequestSchema}     from "../schema/RequestSchema";
import {type IResponseSchema}    from "../schema/ResponseSchema";
import {type IInvalidator}       from "./IInvalidator";
import {type IMutationOptions}   from "./IMutationOptions";
import {type IUseMutationResult} from "./IUseMutationResult";

export interface IWithMutation<TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema> {
    key: string[];
    service: string;
    schema: {
        request: TRequestSchema,
        response: TResponseSchema,
    };
    invalidator?: IInvalidator;

    useMutation(props?: IMutationOptions<z.infer<TRequestSchema>, z.infer<TResponseSchema>>): IUseMutationResult<z.infer<TRequestSchema>, z.infer<TResponseSchema>>;
}
