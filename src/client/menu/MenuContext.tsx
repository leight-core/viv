import {
    IMenuSelectionContext,
    useContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const MenuSelectionContext = createContext<IMenuSelectionContext>(null as unknown as IMenuSelectionContext);

export const useMenuSelectionContext = () => useContext<IMenuSelectionContext>(MenuSelectionContext, "MenuSelectionContext");
