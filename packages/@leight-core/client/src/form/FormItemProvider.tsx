import {IFormItemContext} from "@leight-core/api";
import {
	FC,
	PropsWithChildren
}                         from "react";
import {FormItemContext}  from "./FormItemContext";

export type IFormItemProviderProps = PropsWithChildren<{
	context: IFormItemContext;
}>;

export const FormItemProvider: FC<IFormItemProviderProps> = ({context, ...props}) => {
	return <FormItemContext.Provider
		value={context}
		{...props}
	/>;
};
