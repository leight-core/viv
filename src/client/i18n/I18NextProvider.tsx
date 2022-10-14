import {
    I18NextContext,
    II18NextContext,
    IProviderChildren,
    withProviderChildren
}             from "@leight-core/viv";
import {i18n} from "i18next";
import {
    FC,
    useMemo
}             from "react";

export interface II18NextProviderProps {
    i18next: i18n;
    children?: IProviderChildren<II18NextContext>;
}

export const I18NextProvider: FC<II18NextProviderProps> = ({i18next, children}) => {
    return <I18NextContext.Provider value={useMemo(() => ({i18next}), [])}>
        {withProviderChildren(children, I18NextContext)}
    </I18NextContext.Provider>;
};
