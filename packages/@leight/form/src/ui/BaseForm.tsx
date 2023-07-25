"use client";

import {useTranslation}   from "@leight/i18n";
import {
    BlockStore,
    DrawerStore,
    ModalStore,
    withSuccessNotification
}                         from "@leight/ui";
import {isCallable}       from "@leight/utils";
import {
    Box,
    Divider,
    Group,
    LoadingOverlay
}                         from "@mantine/core";
import {
    type FC,
    type PropsWithChildren
}                         from "react";
import {type IFormSchema} from "../schema/FormSchema";
import {
    type ISubmitButtonProps,
    SubmitButton
}                         from "./SubmitButton";

export type IBaseFormProps<TFormSchema extends IFormSchema, TTypeOf extends IFormSchema.TypeOf<any> = IFormSchema.TypeOf<TFormSchema>> = PropsWithChildren<{
    /**
     * Form holding all the interesting stuff, create by `withForm` method.
     */
    form: Omit<TTypeOf["Form"], "Form">;
    /**
     * Mapper used to map form values to a request value going "out" of the form.
     */
    toRequest: TTypeOf["Mapper"]["toRequest"];
    /**
     * Input factory used to define all fields on a form; they're referenced later on, so logic and presentation in the form is separated.
     */
    inputs: TTypeOf["InputsFactory"];
    /**
     * If there is a form already defined, you can freely override its fields, so it's possible to make an alternative version of any form.
     */
    inputsOverride?: TTypeOf["InputsOverrideFactory"];
    /**
     * Mark some fields as hidden, so if there is "parent" form with fields you want to hide, this can help.
     */
    hidden?: TTypeOf["Keys"][];
    /**
     * Default form values; they're not reactive, so when you change them, form won't re-render.
     */
    defaultValues: TTypeOf["Value"] | (() => TTypeOf["Value"]);
    /**
     * Override default submit button; there are some interesting props on input.
     */
    OverrideSubmit?: FC<IBaseFormProps.RenderSubmitProps<TFormSchema>>;
    submitProps?: Omit<ISubmitButtonProps<TFormSchema>, "form">;
    onSubmit?(props: IBaseFormProps.OnSubmitProps<TFormSchema>): void;
    /**
     * Specify IDs of drawers/modals which should be automagically closed on submit.
     */
    withAutoClose?: string[];
    /**
     * If set to true, form will show translated notification on success.
     */
    notification?: boolean;
}>;

export namespace IBaseFormProps {
    export interface OnSubmitProps<TFormSchema extends IFormSchema, TTypeOf extends IFormSchema.TypeOf<any> = IFormSchema.TypeOf<TFormSchema>> {
        form: TTypeOf["UseForm"];
        request: TTypeOf["Request"];
        values: TTypeOf["Value"];

        /**
         * Access to a default submit function
         */
        onDefaultSubmit(): void;
    }

    export interface RenderSubmitProps<TFormSchema extends IFormSchema> {
        Submit: FC<ISubmitButtonProps<TFormSchema>>;
    }
}

export const BaseForm = <TFormSchema extends IFormSchema>(
    {
        form,
        toRequest,
        inputs,
        inputsOverride,
        hidden,
        defaultValues,
        OverrideSubmit,
        submitProps,
        onSubmit,
        withAutoClose = [],
        notification = true,
        children,
    }: IBaseFormProps<TFormSchema>
) => {
    const block = BlockStore.use$();
    const modal = ModalStore.use$();
    const drawer = DrawerStore.use$();
    const {
        FormProvider,
        useForm
    } = form.mantine;
    const t = useTranslation(form.withTranslation.namespace);
    const $form = useForm({
        initialValues:   isCallable(defaultValues) ? defaultValues() : defaultValues,
        validate:        values => {
            const parsed = form.schema.ValueSchema.safeParse(values);
            if (parsed.success) {
                return {};
            }
            const errors: Record<string, string> = {};
            parsed.error.errors.forEach(error => {
                const path = error.path.join(".");
                errors[path] = t(`${form.withTranslation.label}.${path}.error.${error.message}`, form.withTranslation.values);
            });
            return errors;
        },
        transformValues: values => ({
            request: toRequest({values}),
            values,
        }),
    });

    const Submit = OverrideSubmit ? () => <OverrideSubmit Submit={SubmitButton}/> : SubmitButton;

    const onDefaultSubmit = () => {
        withAutoClose.forEach(item => {
            modal?.close(item);
            drawer?.close(item);
        });
        notification && withSuccessNotification({
            withTranslation: form.withTranslation,
        });
    };

    return (
        /**
         * Native Mantine form provider
         */
        <FormProvider
            form={$form}
        >
            {/*
				@leight store provider with all interesting form stuff
			*/}
            <form.store.Provider
                state={{
                    withTranslation: form.withTranslation,
                    defaultValues,
                    inputs:          inputs({
                        form:   form.store,
                        schema: form.schema,
                    }),
                    inputsOverride:  inputsOverride?.({
                        form:   form.store,
                        schema: form.schema,
                    }),
                    hidden,
                    schema:          form.schema,
                    mantine:         form.mantine,
                }}
            >
                <Box
                    pos={"relative"}
                >
                    <LoadingOverlay
                        visible={block?.isBlock || false}
                    />
                    <form
                        onSubmit={$form.onSubmit((
                            {
                                request,
                                values,
                            }) => {
                            onSubmit?.({
                                form: $form,
                                request,
                                values,
                                onDefaultSubmit,
                            });
                        })}
                    >
                        {children}
                        <Divider
                            mt={"md"}
                        />
                        <Group
                            position={"center"}
                            mt={"md"}
                        >
                            <Submit
                                form={form}
                                {...submitProps}
                            />
                        </Group>
                    </form>
                </Box>
            </form.store.Provider>
        </FormProvider>
    );
};
