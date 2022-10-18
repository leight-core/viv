import {
    Context,
    I18NextContext,
    II18NextContext,
    IProviderChildren
}                from "@leight/ui";
import {i18n}    from "i18next";
import {FC,}     from "react";
import {useMemo} from "use-memo-one";

export interface II18NextProviderProps {
    i18next: i18n;
    children?: IProviderChildren<II18NextContext>;
}

export const I18NextProvider: FC<II18NextProviderProps> = ({i18next, children}) => {
    return <I18NextContext.Provider value={useMemo(() => ({i18next}), [])}>
        {Context.render(children, I18NextContext)}
    </I18NextContext.Provider>;
};
