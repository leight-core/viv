import {type IFormSchema}     from "../schema/FormSchema";
import {type IRequestSchema}  from "../schema/RequestSchema";
import {type IResponseSchema} from "../schema/ResponseSchema";
import {type IValueSchema}    from "../schema/ValueSchema";

/**
 * This is helper method, which only simplifies typing and ensures all required
 * schemas are provided.
 */
export const withFormSchema = <
    TValueSchema extends IValueSchema,
    TRequestSchema extends IRequestSchema,
    TResponseSchema extends IResponseSchema,
>(schema: IFormSchema<TValueSchema, TRequestSchema, TResponseSchema>) => {
    return schema;
};
