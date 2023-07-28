import {type IWithMutation} from "@leight/rpc";
import {type FC}            from "react";
import {type IFormSchema}   from "../schema/FormSchema";
import {
    type IRpcFormProps,
    RpcForm
}                           from "../ui/RpcForm";

export interface IWithBaseRpcFormProps<TFormSchema extends IFormSchema> {
    form: Omit<IFormSchema.Form<TFormSchema>, "Form">;
    inputs: IFormSchema.InputsFactory<TFormSchema>;
    toRequest: IFormSchema.Mapper<TFormSchema>["toRequest"];
    withMutation: IWithMutation<TFormSchema["RequestSchema"], TFormSchema["ResponseSchema"]>;
}

export const withBaseRpcForm = <TFormSchema extends IFormSchema>(
    {
        form,
        inputs,
        toRequest,
        withMutation,
    }: IWithBaseRpcFormProps<TFormSchema>): FC<Omit<IRpcFormProps<TFormSchema>, "form" | "inputs" | "toRequest" | "withMutation">> => {
    return props => <RpcForm
        form={form}
        inputs={inputs}
        toRequest={toRequest}
        withMutation={withMutation}
        {...props}
    />;
};
