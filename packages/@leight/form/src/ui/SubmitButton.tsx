import {Translation}         from "@leight/i18n";
import {BlockStore}          from "@leight/ui";
import {Button}              from "@mantine/core";
import {type ComponentProps} from "react";
import {type IFormSchema}    from "../schema/FormSchema";

export interface ISubmitButtonProps<TFormSchema extends IFormSchema> extends Omit<ComponentProps<typeof Button<"button">>, "form"> {
    form: Omit<IFormSchema.Form<TFormSchema>, "Form">;
}

export const SubmitButton = <TFormSchema extends IFormSchema>(
    {
        form: {
                  mantine,
                  withTranslation,
              },
        ...   props
    }: ISubmitButtonProps<TFormSchema>) => {
    const block = BlockStore.use$();
    const form = mantine.useForm();
    return <Button
        size={"lg"}
        disabled={!form.isValid()}
        type={"submit"}
        loading={block?.isBlock}
        {...props}
    >
        <Translation
            {...withTranslation}
            withLabel={"submit.button"}
        />
    </Button>;
};
