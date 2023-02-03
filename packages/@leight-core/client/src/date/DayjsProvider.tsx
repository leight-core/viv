import {FC, PropsWithChildren} from "react";
import {DayjsContext} from "./DayjsContext";

export type IDayjsProviderProps = PropsWithChildren<{
	dayjs: any;
}>;

export const DayjsProvider: FC<IDayjsProviderProps> = ({dayjs, ...props}) => {
	return <DayjsContext.Provider value={{dayjs}} {...props}/>;
};
