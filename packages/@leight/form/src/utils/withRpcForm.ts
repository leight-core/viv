import {type IWithTranslation}    from "@leight/i18n";
import {type IWithMutation}       from "@leight/rpc";
import {type IFormSchema}         from "../schema/FormSchema";
import {type IRequestSchema}      from "../schema/RequestSchema";
import {type IResponseSchema}     from "../schema/ResponseSchema";
import {type IValueSchema}        from "../schema/ValueSchema";
import {createFormStore}          from "./createFormStore";
import {createMantineFormContext} from "./createMantineFormContext";
import {withBaseRpcForm}          from "./withBaseRpcForm";
import {withFormSchema}           from "./withFormSchema";
import {withInput}                from "./withInput";

export interface ICreateFormProps<
    TValueSchema extends IValueSchema,
    TRequestSchema extends IRequestSchema,
    TResponseSchema extends IResponseSchema,
    TFormSchema extends IFormSchema<TValueSchema, TRequestSchema, TResponseSchema> = IFormSchema<TValueSchema, TRequestSchema, TResponseSchema>,
> {
    name: string;
    schema: Omit<IFormSchema<TValueSchema, TRequestSchema, TResponseSchema>, "RequestSchema" | "ResponseSchema">;
    withTranslation: IWithTranslation;
    inputs: IFormSchema.InputsFactory<TFormSchema>;
    toRequest: IFormSchema.Mapper<TFormSchema>["toRequest"];
    withMutation: IWithMutation<TRequestSchema, TResponseSchema>;
}

export const withRpcForm = <
    TValueSchema extends IValueSchema,
    TRequestSchema extends IRequestSchema,
    TResponseSchema extends IResponseSchema,
>(
    {
        name,
        schema,
        withTranslation,
        inputs,
        toRequest,
        withMutation,
    }: ICreateFormProps<TValueSchema, TRequestSchema, TResponseSchema>): IFormSchema.RpcForm<IFormSchema<TValueSchema, TRequestSchema, TResponseSchema>> => {
    const $schema = {
        ...schema,
        RequestSchema:  withMutation.schema.request,
        ResponseSchema: withMutation.schema.response,
    };
    const formSchema = withFormSchema<TValueSchema, TRequestSchema, TResponseSchema>($schema);
    const store = createFormStore<IFormSchema.TypeOf<typeof formSchema>>({name});
    const mantine = createMantineFormContext<IFormSchema.TypeOf<typeof formSchema>>();
    const Input = withInput<typeof formSchema>({
        form: store,
    });
    return {
        schema: formSchema,
        store,
        mantine,
        Input,
        Form:   withBaseRpcForm<typeof formSchema>({
            form: {
                withTranslation,
                store,
                mantine,
                Input,
                schema: $schema,
            },
            inputs,
            toRequest,
            withMutation,
        }),
        withTranslation,
    };
};
