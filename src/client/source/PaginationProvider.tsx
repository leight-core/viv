import {
    IPaginationContext,
    IProviderChildren,
    PaginationContext,
    useCursorContext,
    useSourceContext,
    withProviderChildren
}                       from "@leight-core/viv";
import {
    FC,
    useMemo
}                       from "react";
import {useTranslation} from "react-i18next";

export interface IPaginationProviderProps {
    children?: IProviderChildren<IPaginationContext>;
}

export const PaginationProvider: FC<IPaginationProviderProps> = ({children}) => {
    const {t}           = useTranslation();
    const sourceContext = useSourceContext();
    const cursorContext = useCursorContext();
    return <PaginationContext.Provider
        value={useMemo(() => ({
            pagination: () => ({
                responsive:       true,
                current:          cursorContext.page + 1,
                total:            cursorContext.count,
                pageSize:         cursorContext.size,
                defaultPageSize:  cursorContext.size,
                showSizeChanger:  false,
                showQuickJumper:  false,
                hideOnSinglePage: true,
                showTotal:        (total, [from, to]) => t(`${sourceContext.name}.list.total`, {total, from, to}),
                onChange:         (current, size) => cursorContext?.setPage(current - 1, size),
            }),
        }), [])}
    >
        {withProviderChildren(children, PaginationContext)}
    </PaginationContext.Provider>;
};
