import {IMenuSelectionContext} from "@leight-core/api";
import {useContext}            from "@leight-core/client";
import {createContext}         from "react";

export const MenuSelectionContext = createContext<IMenuSelectionContext>(null as unknown as IMenuSelectionContext);

export const useMenuSelectionContext = () => useContext<IMenuSelectionContext>(MenuSelectionContext, "MenuSelectionContext");
