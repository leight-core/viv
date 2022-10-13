import {
	EmptyPage,
	IEmptyPageProps,
	LoaderIcon
}               from "@leight-core/client";
import {Result} from "antd";
import {
	FC,
	ReactNode
}               from "react";

export interface ILoadingPageProps extends Partial<IEmptyPageProps> {
	icon?: ReactNode;
}

export const LoadingPage: FC<ILoadingPageProps> = ({children, icon = <LoaderIcon style={{fontSize: 42}}/>, ...props}) => {
	return <EmptyPage title={"common.loading"} {...props}>
		<Result
			style={{marginTop: "10vh"}}
			icon={icon}
			children={children}
		/>
	</EmptyPage>;
};
