import {type FC}          from "react";
import {type IFormSchema} from "../schema/FormSchema";
import {
    type IWithInputProps as ICoolWithInputProps,
    WithInput
}                         from "../ui/WithInput";

export interface IWithInputProps<TFormSchema extends IFormSchema<any, any, any>> {
    form: IFormSchema.Store<TFormSchema>;
}

export const withInput = <TFormSchema extends IFormSchema<any, any, any>>(
    {
        form
    }: IWithInputProps<TFormSchema>): FC<Omit<ICoolWithInputProps<TFormSchema>, "form">> => {
    return props => <WithInput
        form={form}
        {...props}
    />;
};
