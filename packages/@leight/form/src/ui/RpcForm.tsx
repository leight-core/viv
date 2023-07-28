import {useLabel}         from "@leight/i18n";
import {
    isError,
    type IWithMutation
}                         from "@leight/rpc";
import {BlockStore}       from "@leight/ui";
import {type IFormSchema} from "../schema/FormSchema";
import {
    BaseForm,
    type IBaseFormProps
}                         from "./BaseForm";

export interface IRpcFormProps<TFormSchema extends IFormSchema> extends IBaseFormProps<TFormSchema> {
    withMutation: IWithMutation<TFormSchema["RequestSchema"], TFormSchema["ResponseSchema"]>;
    onError?: IFormSchema.OnError<TFormSchema>;
    onSuccess: IFormSchema.OnSuccess<TFormSchema>;
    onSettled?: IFormSchema.OnSettled;
    /**
     * When mutation is done, unblock "BlockContext"?
     */
    shouldUnblock?: boolean;
}

export const RpcForm = <TFormSchema extends IFormSchema>(
    {
        withMutation,
        onError,
        onSuccess,
        onSettled,
        shouldUnblock = true,
        ...props
    }: IRpcFormProps<TFormSchema>) => {
    const block = BlockStore.use$();
    const mutation = withMutation.useMutation();
    const t = useLabel(props.form.withTranslation);
    return <BaseForm
        onSubmit={({
                       request,
                       form,
                       onDefaultSubmit
                   }) => {
            block?.block();
            mutation.mutate(request, {
                onSuccess: response => {
                    shouldUnblock && block?.unblock();
                    onDefaultSubmit();
                    withMutation.invalidator?.({});
                    onSuccess({
                        response,
                    });
                },
                onError:   error => {
                    block?.unblock();
                    console.error(error);
                    isError(error) && onError?.({
                        error,
                        form,
                        setErrors: errors => {
                            Object.entries(errors).map(([k, v]) => {
                                form.setFieldError(k, t(`${k}.error.${v}`));
                            });
                        },
                    });
                },
                onSettled: () => {
                    onSettled?.({});
                },
            });
        }}
        {...props}
    />;
};
