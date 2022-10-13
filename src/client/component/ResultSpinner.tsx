import {LoaderIcon} from "@leight-core/client";
import {
	Result,
	ResultProps
}                   from "antd";
import {FC}         from "react";

export interface IResultSpinnerProps extends Partial<ResultProps> {
}

export const ResultSpinner: FC<IResultSpinnerProps> = props => {
	return <Result
		icon={<LoaderIcon/>}
		{...props}
	/>;
};
