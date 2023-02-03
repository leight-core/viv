import {II18NextContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext} from "../context";

export const I18NextContext = createContext<II18NextContext>(null as unknown as II18NextContext);

export const useI18NextContext = () => useContext<II18NextContext>(I18NextContext, "I18NextContext");
