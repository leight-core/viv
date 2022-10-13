import {
    IVisibleContext,
    useContext,
    useOptionalContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const VisibleContext = createContext<IVisibleContext>(null as any);

export const useVisibleContext         = () => useContext<IVisibleContext>(VisibleContext, "VisibleContext");
export const useOptionalVisibleContext = () => useOptionalContext<IVisibleContext>(VisibleContext as any);
