import {
	BlockContextClass,
	FormBlockContext
} from "@leight-core/client";
import {
	FC,
	PropsWithChildren,
	useState
} from "react";

export type IFormBlockProviderProps = PropsWithChildren<{
	/**
	 * Default blocking state; "false" if not specified.
	 */
	locked?: boolean;
}>;

export const FormBlockProvider: FC<IFormBlockProviderProps> = ({locked = false, ...props}) => {
	return <FormBlockContext.Provider
		value={new BlockContextClass(useState<boolean>(locked), useState<number>(0), locked)}
		{...props}
	/>;
};
