import {type FC}          from "react";
import {type IFormSchema} from "../schema/FormSchema";
import {
    BaseForm,
    type IBaseFormProps
}                         from "../ui/BaseForm";

export interface IWithBaseFormProps<TFormSchema extends IFormSchema> {
    form: Omit<IFormSchema.Form<TFormSchema>, "Form">;
    inputs: IFormSchema.InputsFactory<TFormSchema>;
    toRequest: IFormSchema.Mapper<TFormSchema>["toRequest"];
}

export const withBaseForm = <TFormSchema extends IFormSchema>(
    {
        form,
        inputs,
        toRequest,
    }: IWithBaseFormProps<TFormSchema>): FC<Omit<IBaseFormProps<TFormSchema>, "form" | "inputs" | "toRequest">> => {
    return props => <BaseForm
        form={form}
        inputs={inputs}
        toRequest={toRequest}
        {...props}
    />;
};
