import {type IWithTranslation}    from "@leight/i18n";
import {type IFormSchema}         from "../schema/FormSchema";
import {type IRequestSchema}      from "../schema/RequestSchema";
import {type IResponseSchema}     from "../schema/ResponseSchema";
import {type IValueSchema}        from "../schema/ValueSchema";
import {createFormStore}          from "./createFormStore";
import {createMantineFormContext} from "./createMantineFormContext";
import {withBaseForm}             from "./withBaseForm";
import {withFormSchema}           from "./withFormSchema";
import {withInput}                from "./withInput";

export interface ICreateFormProps<
    TValueSchema extends IValueSchema,
    TRequestSchema extends IRequestSchema,
    TResponseSchema extends IResponseSchema,
    TFormSchema extends IFormSchema<TValueSchema, TRequestSchema, TResponseSchema> = IFormSchema<TValueSchema, TRequestSchema, TResponseSchema>,
> {
    name: string;
    schema: IFormSchema<TValueSchema, TRequestSchema, TResponseSchema>;
    withTranslation: IWithTranslation;
    inputs: IFormSchema.InputsFactory<TFormSchema>;
    toRequest: IFormSchema.Mapper<TFormSchema>["toRequest"];
}

export const withForm = <
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
    }: ICreateFormProps<TValueSchema, TRequestSchema, TResponseSchema>): IFormSchema.Form<IFormSchema<TValueSchema, TRequestSchema, TResponseSchema>> => {
    const formSchema = withFormSchema<TValueSchema, TRequestSchema, TResponseSchema>(schema);
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
        Form:   withBaseForm<typeof formSchema>({
            form: {
                withTranslation,
                store,
                mantine,
                Input,
                schema,
            },
            inputs,
            toRequest,
        }),
        withTranslation,
    };
};
