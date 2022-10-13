import {
    II18NextContext,
    useContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const I18NextContext = createContext<II18NextContext>(null as unknown as II18NextContext);

export const useI18NextContext = () => useContext<II18NextContext>(I18NextContext, "I18NextContext");
