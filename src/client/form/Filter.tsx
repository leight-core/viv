import {
    CloseCircleOutlined,
    SearchOutlined
}                       from "@ant-design/icons";
import {
    Centered,
    DrawerButton,
    Form,
    IDrawerButtonProps,
    IFormProps,
    Submit,
    useFilterContext,
    useFormContext,
    useOptionalCursorContext,
    useOptionalSourceContext,
    useOptionalVisibleContext
}                       from "@leight/viv";
import {
    Button,
    Divider,
    Space,
    SpaceProps
}                       from "antd";
import {
    FC,
    PropsWithChildren
}                       from "react";
import {useTranslation} from "react-i18next";

type IFilterInternalProps = PropsWithChildren<{
    onClear?: () => void;
}>;

const FilterInternal: FC<IFilterInternalProps> = ({onClear, children}) => {
    const {t}           = useTranslation();
    const formContext   = useFormContext();
    const filterContext = useFilterContext();
    return <>
        {children}
        <Divider/>
        <Centered>
            <Space align={"baseline"} split={<Divider type={"vertical"}/>} size={"large"}>
                {!filterContext.isEmpty() && <Button
                    type={"link"}
                    onClick={() => {
                        formContext.reset();
                        filterContext.setFilter();
                        onClear?.();
                    }}
                    icon={<CloseCircleOutlined/>}
                >
                    {t("common.filter.clear")}
                </Button>}
                <Submit
                    icon={<SearchOutlined/>}
                    label={t("common.filter.submit")}
                />
            </Space>
        </Centered>
    </>;
};

type IFilterFormProps<TFilter> =
    {
        /**
         * Filter form translations; it's appending ".filter", for example "foo.bar.filter".
         */
        translation: string;
        formProps?: Partial<IFormProps<TFilter, TFilter>>;

        /**
         * Translate values from the filter form into filter context; by default 1:1 (form content is directly "filterContext.setFilter()").
         */
        toFilter?(values: any): TFilter | undefined;

        /**
         * Setup initial values of the form; by default uses "filterContext.source", if it's empty, toFrom is called with a current filter and source.
         */
        toForm?(filter?: TFilter, source?: any): any;
    }
    & IFilterInternalProps;

const FilterForm = <TFilter, >({translation, onClear, formProps, toForm = filter => filter, toFilter = value => value, ...props}: IFilterFormProps<TFilter>) => {
    const visibleContext = useOptionalVisibleContext();
    const filterContext  = useFilterContext();
    const sourceContext  = useOptionalSourceContext();
    const cursorContext  = useOptionalCursorContext();

    return <Form<TFilter, TFilter>
        layout={"vertical"}
        toForm={() => filterContext.source || toForm(filterContext.filter, filterContext.source)}
        onSuccess={({response}) => {
            sourceContext?.reset();
            filterContext.setFilter(toFilter(response), response);
            cursorContext?.setPage(0);
            visibleContext?.hide();
        }}
        translation={translation + ".filter"}
        {...formProps}
    >
        <FilterInternal
            onClear={() => {
                visibleContext?.hide();
                onClear?.();
            }}
            {...props}
        />
    </Form>;
};

export type IFilterProps<TFilter = any> =
    {
        inline?: boolean;
        translation: string;
        drawerButtonProps?: IDrawerButtonProps;
        spaceProps?: Partial<SpaceProps>;
    }
    & IFilterFormProps<TFilter>

export type IFilterWithoutTranslationProps<TFilter = any> = Omit<IFilterProps<TFilter>, "translation">;

export function Filter<TFilter = any>(
    {
        inline = false,
        translation,
        onClear,
        drawerButtonProps,
        formProps,
        toForm = filter => filter,
        toFilter,
        spaceProps,
        children,
        ...props
    }: IFilterProps<TFilter>): JSX.Element {
    const {t}           = useTranslation();
    const filterContext = useFilterContext();
    const cursorContext = useOptionalCursorContext();
    return inline ?
        <FilterForm
            translation={translation}
            formProps={formProps}
            toForm={toForm}
            toFilter={toFilter}
            {...props}
        /> :
        <Space align={"baseline"} split={<Divider type={"vertical"}/>} {...spaceProps}>
            {children && <DrawerButton
                icon={<SearchOutlined/>}
                type={"link"}
                size={"small"}
                translation={{
                    text:      "title",
                    namespace: translation + ".filter",
                }}
                label={"title"}
                width={750}
                {...drawerButtonProps}
            >
                <FilterForm
                    translation={translation}
                    formProps={formProps}
                    toForm={toForm}
                    toFilter={toFilter}
                    {...props}
                >
                    {children}
                </FilterForm>
            </DrawerButton>}
            {!filterContext.isEmpty() && <Button
                type={"link"}
                size={"small"}
                onClick={() => {
                    cursorContext?.setPage(0);
                    filterContext.setFilter();
                    onClear?.();
                }}
                icon={<CloseCircleOutlined/>}
            >
                {t("common.filter.clear")}
            </Button>}
        </Space>;
}
