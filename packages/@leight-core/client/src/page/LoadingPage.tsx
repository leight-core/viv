import {Result}     from "antd";
import {
	FC,
	ReactNode
}                   from "react";
import {LoaderIcon} from "../icon";
import {
	EmptyPage,
	IEmptyPageProps
}                   from "./EmptyPage";

export interface ILoadingPageProps extends Partial<IEmptyPageProps> {
	icon?: ReactNode;
}

export const LoadingPage: FC<ILoadingPageProps> = (
	{
		children,
		icon = <LoaderIcon style={{fontSize: 42}}/>,
		...props
	}) => {
	return <EmptyPage title={"common.loading"} {...props}>
		<Result
			style={{marginTop: "10vh"}}
			icon={icon}
			children={children}
		/>
	</EmptyPage>;
};