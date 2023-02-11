import {
	Button,
	ButtonProps,
	Tooltip
}                       from "antd";
import {useTranslation} from "../i18n";
import {
	useCursorContext,
	useFilterContext
}                       from "../source";

export interface IFilterButtonProps<TFilter> extends Partial<ButtonProps> {
	label: string;
	tooltip?: string;
	applyFilter?: TFilter;
}

export const FilterButton = <TFilter, >(
	{
		label,
		tooltip = "common.filter.by-value.tooltip",
		applyFilter,
		...props
	}: IFilterButtonProps<TFilter>) => {
	const {t}           = useTranslation();
	const cursorContext = useCursorContext();
	const filterContext = useFilterContext();
	return <Tooltip title={tooltip ? t(tooltip) : undefined}>
		<Button
			type={"link"}
			size={"small"}
			onClick={() => {
				filterContext.setFilter(applyFilter);
				cursorContext.setPage(0);
			}}
			{...props}
		>
			{t(label)}
		</Button>
	</Tooltip>;
};
