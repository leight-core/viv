import {isString}                    from "@leight/utils";
import {UseQueryResult}              from "@tanstack/react-query";
import {
	Alert,
	Empty,
	SpinProps,
	Table as CoolTable,
	TableProps
}                                    from "antd";
import type {ColumnProps}            from "antd/es/table";
import React                         from "react";
import {useTranslation}              from "../i18n";
import {LoaderIcon}                  from "../icon";
import {useOptionalSelectionContext} from "../selection";
import {
	PaginationProvider,
	useOptionalFilterContext,
	useSourceContext
}                                    from "../source";
import {Template}                    from "../template";

export interface ITableColumnProps<TItem> extends Omit<ColumnProps<TItem>, "dataIndex"> {
	readonly dataIndex?: keyof TItem | null;
}

export interface ITableProps<TResponse> extends Omit<TableProps<TResponse>, "children"> {
	hidden?: string[];
	children?: (ITableColumnProps<TResponse> | undefined)[];
	loading?: Partial<SpinProps>;
	withLoading?: keyof Pick<UseQueryResult, "isLoading" | "isFetching" | "isRefetching">;
	translation?: string;
	withFilterAlert?: boolean;
}

export const Table = <TResponse, >(
	{
		hidden,
		children = [],
		loading,
		translation,
		withLoading = "isFetching",
		withFilterAlert = true,
		...props
	}: ITableProps<TResponse>) => {
	const {t}              = useTranslation();
	const sourceContext    = useSourceContext<TResponse>();
	const selectionContext = useOptionalSelectionContext<TResponse>();
	const filterContext    = useOptionalFilterContext();

	const createColumn = (props: any) => {
		const columnProps = {...props};
		if (columnProps.title === undefined) {
			columnProps.title = `table.${translation}.${columnProps.key}.column`;
		}
		if (isString(columnProps.title)) {
			columnProps.title = t(columnProps.title);
		}
		if (columnProps.dataIndex === undefined) {
			columnProps.dataIndex = columnProps.key;
		} else if (columnProps.dataIndex === null) {
			columnProps.dataIndex = undefined;
			columnProps.render    = columnProps.render || (() => null);
		}
		return hidden?.includes(columnProps.key) ? null : <CoolTable.Column {...columnProps}/>;
	};

	return <PaginationProvider>
		{paginationContext => <>
			{!filterContext?.isEmpty() && <Alert type={"warning"} message={t(`table.${translation}.filtered`)}/>}
			<CoolTable<any>
				style={{minHeight: "50vh"}}
				showSorterTooltip={false}
				dataSource={sourceContext.data()}
				rowKey={((record: any) => record.id) as any}
				loading={{
					spinning:  sourceContext.result[withLoading],
					delay:     250,
					indicator: <Template icon={<LoaderIcon/>}/>,
					...loading,
				}}
				rowSelection={selectionContext ? {
					type:             selectionContext.type === "single" ? "radio" : "checkbox",
					selectedRowKeys:  selectionContext.toSelection(),
					onSelect:         (item, selected) => selectionContext.item(item, selected),
					onSelectAll:      (selected, _, items) => selectionContext.items(items, selected),
					onSelectMultiple: (selected, _, items) => selectionContext.items(items, selected),
					onSelectNone:     () => selectionContext.clear(),
				} : undefined}
				size={"small"}
				locale={{emptyText: <Empty description={t("common.nothing-found")}/>}}
				pagination={{
					...paginationContext.pagination(),
					position: ["bottomRight"],
				}}
				{...props}
			>
				{children?.filter(i => i).map(createColumn)}
			</CoolTable>
		</>}
	</PaginationProvider>;
};
