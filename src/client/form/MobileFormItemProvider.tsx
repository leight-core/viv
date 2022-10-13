import {IMobileFormItemContext} from "@leight-core/api";
import {MobileFormItemContext}  from "@leight-core/client";
import {
	FC,
	PropsWithChildren
}                               from "react";

export type IMobileFormItemProviderProps = PropsWithChildren<{
	context: IMobileFormItemContext;
}>;

export const MobileFormItemProvider: FC<IMobileFormItemProviderProps> = ({context, ...props}) => {
	return <MobileFormItemContext.Provider
		value={context}
		{...props}
	/>;
};
