import {i18n} from "i18next";
import {FC, PropsWithChildren} from "react";
import {I18NextContext} from "./I18NextContext";

export type II18NextProviderProps = PropsWithChildren<{
	i18next: i18n;
}>;

export const I18NextProvider: FC<II18NextProviderProps> = ({i18next, ...props}) => {
	return <I18NextContext.Provider value={{i18next}} {...props}/>;
};
