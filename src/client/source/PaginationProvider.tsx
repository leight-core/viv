import {IPaginationContext} from "@leight-core/api";
import {
	PaginationContext,
	useCursorContext,
	useSourceContext
}                           from "@leight-core/client";
import {isCallable}         from "@leight-core/utils";
import {
	FC,
	ReactNode
}                           from "react";
import {useTranslation}     from "react-i18next";

export interface IPaginationProviderProps {
	children?: ReactNode | ((paginationContext: IPaginationContext) => ReactNode);
}

export const PaginationProvider: FC<IPaginationProviderProps> = ({children}) => {
	const {t}           = useTranslation();
	const sourceContext = useSourceContext();
	const cursorContext = useCursorContext();
	return <PaginationContext.Provider
		value={{
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
		}}
	>
		{isCallable(children) ? <PaginationContext.Consumer>{children as any}</PaginationContext.Consumer> : children as ReactNode}
	</PaginationContext.Provider>;
};
