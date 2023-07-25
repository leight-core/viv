import {useTranslation}                     from "@leight/i18n";
import {PasswordInput as CoolPasswordInput} from "@mantine/core";
import {type ComponentProps}                from "react";
import {type IFormSchema}                   from "../schema/FormSchema";
import {withDefaultInputProps}              from "../utils/withDefaultInputProps";

export interface IPasswordInputProps<TFormSchema extends IFormSchema> extends Omit<ComponentProps<typeof CoolPasswordInput>, "form">, IFormSchema.WithInputProps<TFormSchema> {
}

export const PasswordInput = <TFormSchema extends IFormSchema>(
    {
        form,
        path,
        label,
        placeholder,
        description,
        ...props
    }: IPasswordInputProps<TFormSchema>) => {
    const {
        mantine: {useFormContext},
        withTranslation,
    } = form.use((
        {
            mantine,
            withTranslation
        }) => (
        {
            mantine,
            withTranslation
        }));
    const t = useTranslation(withTranslation.namespace);
    return <CoolPasswordInput
        {...withDefaultInputProps<TFormSchema>({
            t,
            form: useFormContext(),
            withTranslation,
            label,
            placeholder,
            description,
            path,
        })}
        {...props}
    />;
};
