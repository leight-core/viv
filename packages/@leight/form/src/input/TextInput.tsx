import {useTranslation}             from "@leight/i18n";
import {TextInput as CoolTextInput} from "@mantine/core";
import {type ComponentProps}        from "react";
import {type IFormSchema}           from "../schema/FormSchema";
import {withDefaultInputProps}      from "../utils/withDefaultInputProps";

export interface ITextInputProps<TFormSchema extends IFormSchema> extends Omit<ComponentProps<typeof CoolTextInput>, "form">, IFormSchema.WithInputProps<TFormSchema> {
}

export const TextInput = <TFormSchema extends IFormSchema>(
    {
        form,
        path,
        label,
        placeholder,
        description,
        ...props
    }: ITextInputProps<TFormSchema>) => {
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
    return <CoolTextInput
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
