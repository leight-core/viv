import {isString}         from "@leight/utils";
import {UseQueryResult}   from "@tanstack/react-query";
import {
    Empty,
    SpinProps,
    Table as CoolTable,
    TableProps
}                         from "antd";
import type {ColumnProps} from "antd/es/table";
import React              from "react";
import {useTranslation}   from "react-i18next";

export interface ITableColumnProps<TItem> extends Omit<ColumnProps<TItem>, "dataIndex"> {
    readonly dataIndex?: keyof TItem | null;
}

export interface ITableProps<TResponse> extends Omit<TableProps<TResponse>, "children"> {
    hidden?: string[];
    children?: (ITableColumnProps<TResponse> | undefined)[];
    loading?: Partial<SpinProps>;
    withLoading?: keyof Pick<UseQueryResult, "isLoading" | "isFetching" | "isRefetching">;
    translation?: string;
}

export const Table = <TResponse, >(
    {
        hidden,
        children = [],
        loading,
        translation,
        withLoading = "isFetching",
        ...props
    }: ITableProps<TResponse>) => {
    const {t}              = useTranslation();
    const sourceContext    = useSourceContext();
    const selectionContext = useOptionalSelectionContext();

    const createColumn = (props: any) => {
        if (props.title === undefined) {
            props.title = `table.${translation}.${props.key}.column`;
        }
        if (isString(props.title)) {
            props.title = t(props.title as string);
        }
        if (props.dataIndex === undefined) {
            props.dataIndex = props.key;
        } else if (props.dataIndex === null) {
            props.dataIndex = undefined;
            props.render    = props.render || (() => null);
        }
        return hidden?.includes(props.key) ? null : <CoolTable.Column {...props}/>;
    };

    return <PaginationProvider>
        {paginationContext => <CoolTable<any>
            style={{minHeight: "50vh"}}
            showSorterTooltip={false}
            dataSource={sourceContext.data()}
            rowKey={((record: any) => record.id) as any}
            loading={{
                spinning:  sourceContext.result[withLoading],
                delay:     250,
                indicator: <Template
                               icon={<LoaderIcon/>}
                           />,
                ...loading,
            }}
            rowSelection={selectionContext ? {
                type:             selectionContext.type === "single" ? "radio" : "checkbox",
                selectedRowKeys:  selectionContext.toSelection(),
                onSelect:         (file, selected) => selectionContext.item(file, selected),
                onSelectAll:      (selected, _, files) => selectionContext.items(files, selected),
                onSelectMultiple: (selected, _, files) => selectionContext.items(files, selected),
                onSelectNone:     () => selectionContext.clear(),
            } : undefined}
            size={"large"}
            locale={{emptyText: <Empty description={t("common.nothing-found")}/>}}
            pagination={{
                ...paginationContext.pagination(),
                position: ["bottomRight"],
            }}
            {...props}
        >
            {children?.filter(i => i).map(createColumn)}
        </CoolTable>}
    </PaginationProvider>;
};
