import {useTranslation}                 from "@leight/i18n";
import {toHumanNumber}                  from "@leight/utils";
import {NumberInput as CoolNumberInput} from "@mantine/core";
import {type ComponentProps}            from "react";
import {type IFormSchema}               from "../schema/FormSchema";
import {withDefaultInputProps}          from "../utils/withDefaultInputProps";

export interface INumberInputProps<TFormSchema extends IFormSchema> extends Omit<ComponentProps<typeof CoolNumberInput>, "form">, IFormSchema.WithInputProps<TFormSchema> {
}

export const NumberInput = <TFormSchema extends IFormSchema>(
    {
        form,
        path,
        label,
        placeholder,
        description,
        ...props
    }: INumberInputProps<TFormSchema>) => {
    const {
        mantine: {useFormContext},
        withTranslation
    } = form.use(({
                      mantine,
                      withTranslation,
                  }) => ({
        mantine,
        withTranslation,
    }));
    const t = useTranslation(withTranslation.namespace);
    return <CoolNumberInput
        {...withDefaultInputProps<TFormSchema>({
            t,
            form: useFormContext(),
            withTranslation,
            label,
            placeholder,
            description,
            path,
        })}
        formatter={value => {
            const number = parseFloat(value);
            return !Number.isNaN(number) ? toHumanNumber({number}) : "";
        }}
        {...props}
    />;
};
