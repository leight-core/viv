"use client";

import {type IWithTranslation}                       from "@leight/i18n";
import {type IErrorResponse}                         from "@leight/rpc";
import {
    type IStoreProps,
    type IStorePropsType,
    type IStoreSchema
}                                                    from "@leight/store";
import {
    type KeysOf,
    z
}                                                    from "@leight/utils";
import {
    type createFormContext as createCoolFormContext,
    type UseFormReturnType
}                                                    from "@mantine/form";
import {type FC}                                     from "react";
import {type IBaseFormProps}                         from "../ui/BaseForm";
import {IRpcFormProps}                               from "../ui/RpcForm";
import {type IWithInputProps as ICoolWithInputProps} from "../ui/WithInput";
import {type IRequestSchema}                         from "./RequestSchema";
import {type IResponseSchema}                        from "./ResponseSchema";
import {type IValueSchema}                           from "./ValueSchema";

/**
 * This interface defines basic shape for all schemas used in a form.
 */
export interface IFormSchema<
    TValueSchema extends IValueSchema = IValueSchema,
    TRequestSchema extends IRequestSchema = IRequestSchema,
    TResponseSchema extends IResponseSchema = IResponseSchema,
> {
    ValueSchema: TValueSchema;
    RequestSchema: TRequestSchema;
    ResponseSchema: TResponseSchema;
}

export namespace IFormSchema {
    export type FormOf<TForm extends Form> = TypeOf<TForm["schema"]>;

    /**
     * Extract all interesting types used in a form to keep overall types simple. This is not intended to be used as an instance, only as a type.
     *
     * Because it's extended from IFormSchema, schemas are included.
     */
    export interface TypeOf<
        TFormSchema extends IFormSchema = IFormSchema
    > {
        Schema: TFormSchema;
        /**
         * Type of form values.
         */
        Value: z.infer<TFormSchema["ValueSchema"]>;
        /**
         * Keys used to require form input definitions.
         */
        Keys: Keys<TFormSchema>;
        Inputs: Inputs<TFormSchema>;
        InputsFactory: InputsFactory<TFormSchema>;
        InputsOverrideFactory: InputsOverrideFactory<TFormSchema>;
        /**
         * Type of form request
         */
        Request: z.infer<TFormSchema["RequestSchema"]>;
        /**
         * Type of form response
         */
        Response: z.infer<TFormSchema["ResponseSchema"]>;
        /**
         * When a form is submitted, this type is used to execute request (do whatever a dev needs); it
         * provides access to native form values and mapped request.
         */
        Result: Result<TFormSchema>;
        /**
         * Typed mappers used in this form.
         */
        Mapper: Mapper<TFormSchema>;
        /**
         * Typed Mantine Context, used to access Mantine specific form stuff.
         */
        MantineContext: MantineContext<TFormSchema>;
        /**
         * Typed form from mantine (Mantine's useForm()).
         */
        UseForm: UseFormReturnType<z.infer<TFormSchema["ValueSchema"]>, Mapper<TFormSchema>["toResult"]>;
        StoreProps: StoreProps<TFormSchema>;
        Form: Form<TFormSchema>;
    }

    /**
     * This is shape of form "Context" with all the items needed to use form: from base form rendering to
     * typed inputs, schemas, store and so on.
     */
    export interface Form<TFormSchema extends IFormSchema = IFormSchema> {
        /**
         * Access to form schemas (for example, external validation or whatever).
         */
        schema: TFormSchema;
        /**
         * Store with access to form stuff usable in common components.
         */
        store: Store<TFormSchema>;
        /**
         * Access to typed Mantine Context.
         */
        mantine: IFormSchema.MantineContext<TFormSchema>;
        /**
         * Typed form Input for rendering defined inputs. This component does **not** contain individual
         * inputs, only typed references to inputs defined **on the form**, so you can use them to render
         * UI of the form only as the content (input rendering) is defined on the form, so you can simply
         * swap inputs without altering content of the form itself.
         */
        Input: FC<Omit<ICoolWithInputProps<TFormSchema>, "form">>;
        /**
         * Typed base form; usually you should use this in your own form wrapper.
         */
        Form: FC<Omit<IBaseFormProps<TFormSchema>, "form" | "inputs" | "toRequest">>;
        /**
         * Reference to translation setup of this form.
         */
        withTranslation: IWithTranslation;
    }

    export interface RpcForm<TFormSchema extends IFormSchema = IFormSchema> extends Omit<Form<TFormSchema>, "Form"> {
        /**
         * Typed base form; usually you should use this in your own form wrapper.
         */
        Form: FC<Omit<IRpcFormProps<TFormSchema>, "form" | "inputs" | "toRequest" | "withMutation">>;
    }

    export type OnError<TFormSchema extends IFormSchema> = (props: OnErrorProps<TFormSchema>) => void;
    export type OnSuccess<TFormSchema extends IFormSchema> = (props: OnSuccessProps<TFormSchema>) => void;
    export type OnSettled = (props: OnSettledProps) => void;

    export interface OnErrorProps<TFormSchema extends IFormSchema> {
        error: IErrorResponse;
        form: UseFormReturnType<z.infer<TFormSchema["ValueSchema"]>, Mapper<TFormSchema>["toResult"]>;

        setErrors(errors: Partial<Record<Keys<TFormSchema>, string>>): void;
    }

    export interface OnSuccessProps<TFormSchema extends IFormSchema> {
        response: z.infer<TFormSchema["ResponseSchema"]>;
    }

    export interface OnSettledProps {
    }

    export type Store<TFormSchema extends IFormSchema> = IStoreSchema<IFormSchema.StoreProps<TFormSchema>>["Store"];

    /**
     * Infers form input keys (all available input names in the form).
     */
    export type Keys<TFormSchema extends IFormSchema> = KeysOf.Leaves<z.infer<TFormSchema["ValueSchema"]>>;

    /**
     * Infers a pair of input keys (names) and input render props.
     */
    export type Inputs<TFormSchema extends IFormSchema> = Record<Keys<TFormSchema>, FC<InputRenderProps<TFormSchema>>>;

    export type InputsFactory<TFormSchema extends IFormSchema> = (props: InputProps<TFormSchema>) => Inputs<TFormSchema>;
    export type InputsOverrideFactory<TFormSchema extends IFormSchema> = (props: InputProps<TFormSchema>) => Partial<Inputs<TFormSchema>>;

    export interface InputProps<TFormSchema extends IFormSchema> {
        form: Store<TFormSchema>;
        schema: TFormSchema;
    }

    export interface WithInputProps<TFormSchema extends IFormSchema> {
        form: Store<TFormSchema>;
        path: Keys<TFormSchema>;
    }

    export interface InputRenderProps<TFormSchema extends IFormSchema> {
        mandatory: WithInputProps<TFormSchema>;
        withLabel: {
            label: string;
        };
        withLabelPlaceholder: {
            label: string;
            placeholder: string;
        };
        withDescription: {
            description: string;
        },
    }

    export interface Result<TFormSchema extends IFormSchema> {
        request: z.infer<TFormSchema["RequestSchema"]>;
        values: z.infer<TFormSchema["ValueSchema"]>;
    }

    export interface Mapper<TFormSchema extends IFormSchema> {
        toRequest(value: Mapper.ToRequest<TFormSchema>["Input"]): Mapper.ToRequest<TFormSchema>["Output"];

        toResult(value: Mapper.ToResult<TFormSchema>["Input"]): Mapper.ToResult<TFormSchema>["Output"];
    }

    export namespace Mapper {
        export interface ToRequest<TFormSchema extends IFormSchema> {
            Input: {
                values: z.infer<TFormSchema["ValueSchema"]>;
            };
            Output: z.infer<TFormSchema["RequestSchema"]>;
        }

        export interface ToResult<TFormSchema extends IFormSchema> {
            Input: z.infer<TFormSchema["ValueSchema"]>;
            Output: Result<TFormSchema>;
        }
    }

    export interface MantineContext<TFormSchema extends IFormSchema> {
        FormProvider: ReturnType<typeof createCoolFormContext<z.infer<TFormSchema["ValueSchema"]>, Mapper<TFormSchema>["toResult"]>>[0];
        useFormContext: ReturnType<typeof createCoolFormContext<z.infer<TFormSchema["ValueSchema"]>, Mapper<TFormSchema>["toResult"]>>[1];
        useForm: ReturnType<typeof createCoolFormContext<z.infer<TFormSchema["ValueSchema"]>, Mapper<TFormSchema>["toResult"]>>[2];
    }

    export type StoreProps<TFormSchema extends IFormSchema> = IStoreProps<IStorePropsType, {
        /**
         * Access to native Mantine (form) context; most common stuff is exported
         */
        mantine: MantineContext<TFormSchema>;
        /**
         * Form schemas with values/request/response definition
         */
        schema: TFormSchema;
        /**
         * Input render factories.
         */
        inputs: Inputs<TFormSchema>;
        /**
         * Input overrides
         */
        inputsOverride?: Partial<Inputs<TFormSchema>>;
        /**
         * Translations used in the form context.
         */
        withTranslation: IWithTranslation;
        /**
         * Default values; they're not partial as they must match value schema.
         */
        defaultValues?: z.infer<TFormSchema["ValueSchema"]>;
        /**
         * Inputs marked as hidden.
         */
        hidden?: Keys<TFormSchema>[];
    }>
}
