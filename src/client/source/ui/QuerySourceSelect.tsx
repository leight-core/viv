import {
    IBaseSelectOption,
    isString,
    IToOptionMapper,
    useOptionalFilterContext,
    useOptionalFormItemContext,
    useSourceContext,
}                       from "@leight-core/viv";
import {
    Empty,
    Select,
    SelectProps
}                       from "antd";
import React, {
    PropsWithChildren,
    useEffect,
    useRef
}                       from "react";
import {useTranslation} from "react-i18next";

export interface IQuerySourceValue<TResponse> extends IBaseSelectOption {
    entity: TResponse;
}

export interface IQuerySourceSelectProps<TResponse> extends Partial<Omit<SelectProps<string, IQuerySourceValue<TResponse>>, "onSelect" | "onDeselect">> {
    /**
     * Map requested data into Select's options.
     */
    toOption: IToOptionMapper<TResponse>;
    /**
     * Use label as placeholder for the select.
     */
    usePlaceholder?: boolean;
    /**
     * When se to true, select will filter values set.
     */
    filter?: boolean;
    disableOnEmpty?: boolean;
    /**
     * Debounce interval in ms.
     */
    debounce?: number;

    onSelect?(value: IQuerySourceValue<TResponse>): void;

    onDeselect?(value: IQuerySourceValue<TResponse>): void;

    toId?(value?: string | null): Record<string, string | null | undefined>;

    labelPrefix?: string;
}

export const QuerySourceSelect = <TResponse, >(
    {
        toOption,
        /**
         * Value extracted from props for to prevent showing it in the placeholder Select.
         */
        value,
        debounce = 200,
        usePlaceholder,
        showSearch = false,
        filter = showSearch,
        disableOnEmpty = true,
        onSelect,
        onDeselect,
        labelPrefix,
        toId = value => ({id: value}),
        ...props
    }: PropsWithChildren<IQuerySourceSelectProps<TResponse>>) => {
    const tid             = useRef<any>();
    const {t}             = useTranslation();
    const sourceContext   = useSourceContext();
    const filterContext   = useOptionalFilterContext();
    const formItemContext = useOptionalFormItemContext();
    formItemContext && usePlaceholder && (props.placeholder = formItemContext.label);
    useEffect(() => {
        filter && filterContext?.setFilter(toId(value));
    }, [value]);
    useEffect(() => {
        filter && filterContext?.setFilter(toId(value));
    }, []);

    const $onSelect: any   = (value: string, option: IQuerySourceValue<TResponse>) => onSelect?.(option);
    const $onDeselect: any = (value: string, option: IQuerySourceValue<TResponse>) => onDeselect?.(option);

    return sourceContext.result.isSuccess ? <Select<string, IQuerySourceValue<TResponse>>
        options={sourceContext.result.data.map(entity => {
            const option = toOption(entity);
            return ({
                ...option,
                label: isString(option.label) ? t((labelPrefix || "") + option.label, option.label) : option.label,
                entity,
            });
        })}
        onSelect={$onSelect}
        onDeselect={$onDeselect}
        loading={sourceContext.result.isFetching}
        filterOption={() => true}
        showSearch={showSearch}
        notFoundContent={<Empty description={t("common.nothing-found")}/>}
        style={{width: "100%"}}
        onSearch={showSearch ? fulltext => {
            clearTimeout(tid.current);
            tid.current = setTimeout(() => filterContext?.setFilter({fulltext}), debounce);
        } : undefined}
        onClear={() => filterContext?.setFilter()}
        disabled={!showSearch && disableOnEmpty && !sourceContext.hasData()}
        value={value}
        {...props}
    /> : <Select<string, IQuerySourceValue<TResponse>>
        showSearch={showSearch}
        loading={sourceContext.result.isLoading}
        disabled={disableOnEmpty}
        style={{width: "100%"}}
        onSelect={$onSelect}
        {...props}
    />;
};
