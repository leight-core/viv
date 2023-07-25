import {
    type IWithTranslation,
    type IWithTranslator,
    Translation
}                         from "@leight/i18n";
import {type ReactNode}   from "react";
import {type IFormSchema} from "../schema/FormSchema";

export type IWithDefaultInputProps<TFormSchema extends IFormSchema, TTypeOf extends IFormSchema.TypeOf<any> = IFormSchema.TypeOf<TFormSchema>> = {
    t: IWithTranslator;
    form: TTypeOf["UseForm"];
    path: string;
    label?: ReactNode;
    placeholder?: string;
    description?: ReactNode;
    withTranslation: IWithTranslation;
}

export const withDefaultInputProps = <TFormSchema extends IFormSchema>(
    {
        t,
        form,
        path,
        label,
        placeholder,
        description,
        withTranslation,
    }: IWithDefaultInputProps<TFormSchema>) => {
    return {
        ...form.getInputProps(path),
        mt:          "md",
        size:        "md",
        label:       label ? <Translation {...withTranslation} withLabel={`${label}.label`}/> : undefined,
        placeholder: placeholder ? t(`${withTranslation.label}.${placeholder}`, withTranslation.values) : undefined,
        description: description ? <Translation {...withTranslation} withLabel={description}/> : description,
    };
};
