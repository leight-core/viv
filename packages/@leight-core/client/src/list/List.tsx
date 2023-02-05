import {ISourceContext} from "@leight-core/api";
import {UseQueryResult} from "@tanstack/react-query";
import {List as CoolList, ListProps, SpinProps} from "antd";
import React, {ReactNode} from "react";
import {PaginationProvider, useSourceContext} from "../source";
import {Template} from "../template";
import {LoaderIcon} from "../icon";

export interface IListProps<TResponse> extends Partial<Omit<ListProps<TResponse>, "children" | "header" | "footer">> {
	loading?: Partial<SpinProps>;
	withLoading?: keyof Pick<UseQueryResult, "isLoading" | "isFetching" | "isRefetching">;
	emptyText?: ReactNode;

	header?(sourceContext: ISourceContext<TResponse>): ReactNode;

	footer?(sourceContext: ISourceContext<TResponse>): ReactNode;

	/**
	 * Optional typed method for rendering list's item extra field.
	 */
	renderItemExtra?(item: TResponse): ReactNode;

	children?(item: TResponse): ReactNode;
}

export const ListItem = CoolList.Item;
export const ListItemMeta = CoolList.Item.Meta;

export const List = <TResponse, >(
	{
		header,
		footer,
		children,
		emptyText,
		loading,
		withLoading = "isFetching",
		...props
	}: IListProps<TResponse>) => {
	const sourceContext = useSourceContext<TResponse>();
	return <PaginationProvider>
		{paginationContext => <CoolList
			header={header?.(sourceContext)}
			footer={footer?.(sourceContext)}
			dataSource={sourceContext.data()}
			loading={{
				spinning: sourceContext.result[withLoading],
				delay: 250,
				indicator: <Template
					icon={<LoaderIcon/>}
				/>,
				...loading,
			}}
			locale={{
				emptyText,
			}}
			renderItem={children}
			pagination={paginationContext.pagination()}
			size={"large"}
			{...props}
		/>}
	</PaginationProvider>;
};
