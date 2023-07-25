import {createFormContext as createCoolFormContext} from "@mantine/form";
import {type IFormSchema}                           from "../schema/FormSchema";

export const createMantineFormContext = <TTypeOf extends IFormSchema.TypeOf<any>>(): TTypeOf["MantineContext"] => {
    const [FormProvider, useFormContext, useForm] = createCoolFormContext<TTypeOf["Value"], TTypeOf["Mapper"]["toResult"]>();
    return {
        FormProvider,
        useFormContext,
        useForm,
    };
};
