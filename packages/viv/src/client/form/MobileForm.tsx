import {
    FormLoadingProvider,
    IFormError,
    IMobileFormChanged,
    IMobileFormContext,
    IMobileFormErrorHandler,
    IMobileFormErrorMap,
    IMobileFormFailure,
    IMobileFormSuccess,
    IMobileFormValuesChanged,
    IMutationHook,
    INavigate,
    IQueryParams,
    isCallable,
    IToMobileFormError,
    LoaderIcon,
    MobileFormProvider,
    MobileSubmit,
    useNavigate,
    useOptionalVisibleContext,
    usePassThroughMutation,
    WithToken
}                       from "@leight/viv";
import {
    message,
    Spin
}                       from "antd";
import {
    Form,
    Toast
}                       from "antd-mobile";
import React, {
    ComponentProps,
    ReactNode
}                       from "react";
import {useTranslation} from "react-i18next";

export interface IMobileFormProps<TRequest, TResponse, TQueryParams extends IQueryParams = any> extends ComponentProps<typeof Form> {
    /**
     * Base translation used in the whole form; extremely simplifies translations.
     */
    translation?: string;

    /**
     * What to do on form submit.
     */
    useMutation?: IMutationHook<TRequest, TResponse, TQueryParams>;
    mutationQueryParams?: TQueryParams;

    /**
     * Map form data to mutation data.
     */
    toMutation?(values: any): TRequest;

    /**
     * Map data to the initial state of the form (if any).
     */
    toForm?(): any;

    /**
     * Called when a form is successfully committed.
     */
    onSuccess?(success: IMobileFormSuccess<any, TResponse>): void;

    /**
     * Called when an error occurs.
     */
    onFailure?(failure: IMobileFormFailure<any>): void;

    /**
     * Map error from outside to a state in the form (like a general error or a field error).
     */
    toError?: (error: IToMobileFormError<any, any>) => IMobileFormErrorMap<any>;
    /**
     * If the form is used under a drawer, this flag controls if it should be automatically closed on success.
     */
    shouldHide?: boolean;

    onValuesChange?(success: IMobileFormValuesChanged<any>): void;

    onChange?(change: IMobileFormChanged<any>): void;

    /**
     * Optional ACL check - if specified, user must possess any of the given token.
     */
    tokens?: string[];
    /**
     * Props for the WithToken component.
     */
    withTokenProps?: ComponentProps<typeof WithToken>;
    /**
     * Submit button label (goes through translation).
     */
    submit?: string;
    /**
     * Optional icon used in this form.
     */
    icon?: ReactNode;
}

export function MobileForm<TRequest = any, TResponse = void, TQueryParams extends IQueryParams = any>(
    {
        tokens,
        translation,
        withTokenProps,
        useMutation = usePassThroughMutation,
        mutationQueryParams,
        toMutation = values => values,
        toForm = () => null as any,
        onSuccess = () => null,
        toError = () => ({}),
        onFailure,
        shouldHide = true,
        onValuesChange,
        onChange,
        submit = "submit",
        icon,
        ...props
    }: IMobileFormProps<TRequest, TResponse, TQueryParams>) {
    const {t}                 = useTranslation();
    const visibleContext      = useOptionalVisibleContext();
    const doNavigate          = useNavigate();
    const mutation            = useMutation(mutationQueryParams);
    const navigate: INavigate = (href, queryParams) => doNavigate(href, queryParams);

    return <WithToken
        tokens={tokens}
        label={translation ? `${translation}.403` : undefined}
        {...withTokenProps}
    >
        <FormLoadingProvider>
            {formLoadingContext => <MobileFormProvider
                translation={translation}
            >
                {formContext => {
                    function handleError(formError: IFormError | IMobileFormErrorHandler<any, any>, error: any, formContext: IMobileFormContext) {
                        let handle = formError;
                        if (!isCallable(handle)) {
                            handle = () => formContext.setErrors({
                                errors: [
                                    (formError as IFormError),
                                ],
                            });
                        }
                        (handle as IMobileFormErrorHandler<any, any>)({error, formContext});
                    }

                    onFailure = onFailure || (({error, formContext}) => {
                        const map       = toError({error, formContext});
                        const formError = map[error];
                        const general   = map["general"];
                        formError && handleError(formError, error, formContext);
                        !formError && general && handleError(general, error, formContext);
                        message.error(t("error." + error));
                    });

                    return <Spin indicator={<LoaderIcon/>} spinning={formLoadingContext.isLoading()}>
                        <Form
                            layout={"vertical"}
                            form={formContext.form}
                            initialValues={toForm()}
                            onFieldsChange={() => onChange?.({values: formContext.values(), formContext})}
                            onValuesChange={(changed, values) => onValuesChange?.({values, changed, formContext})}
                            onFinish={values => {
                                const $t: (text: string, data?: Record<string, any>) => string = (text, data) => t(formContext.translation ? `${formContext.translation}.${text}` : text, data);
                                Toast.show({icon: "loading", maskClickable: false, duration: 0});
                                mutation.mutate(toMutation(values), {
                                    onSuccess: response => {
                                        message.success($t("success", response as any));
                                        Toast.show({
                                            icon:          "success",
                                            maskClickable: false,
                                            duration:      500,
                                        });
                                        shouldHide && visibleContext?.hide();
                                        onSuccess({
                                            navigate,
                                            values,
                                            response,
                                            formContext,
                                            t: $t,
                                        });
                                    },
                                    onError:   error => {
                                        Toast.show({
                                            icon:          "fail",
                                            maskClickable: false,
                                            duration:      500,
                                        });
                                        onFailure?.({error: (error && error.response && error.response.data) || error, formContext});
                                    },
                                });
                            }}
                            footer={submit && formContext.isSubmitVisible ? <MobileSubmit icon={icon} label={submit}/> : undefined}
                            {...props}
                        />
                    </Spin>;
                }}
            </MobileFormProvider>}
        </FormLoadingProvider>
    </WithToken>;
}
