import {Box}              from "@mantine/core";
import {
    type ComponentProps,
    type FC
}                         from "react";
import {type IFormSchema} from "../schema/FormSchema";

export interface IWithInputProps<TFormSchema extends IFormSchema<any, any, any>> extends ComponentProps<typeof Box<"div">>, IFormSchema.WithInputProps<TFormSchema> {
}

export const WithInput = <TFormSchema extends IFormSchema>(
    {
        form,
        path,
        ...props
    }: IWithInputProps<TFormSchema>) => {
    const {
        inputs,
        hidden,
        inputOverrides
    } = form.use((
        {
            inputs,
            hidden,
            inputOverrides
        }) => (
        {
            inputs,
            hidden,
            inputOverrides
        })
    );
    const Input: FC<IFormSchema.InputRenderProps<TFormSchema>> = inputOverrides?.[path] || inputs[path];
    return hidden?.includes(path) ? null : <Box
        {...props}
    >
        <Input
            mandatory={{
                form,
                path,
            }}
            withLabel={{
                label: path,
            }}
            withLabelPlaceholder={{
                label:       path,
                placeholder: `${path}.placeholder`,
            }}
            withDescription={{
                description: `${path}.description`,
            }}
        />
    </Box>;
};
