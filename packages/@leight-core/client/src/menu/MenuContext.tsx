import {IMenuSelectionContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext} from "../context";

export const MenuSelectionContext = createContext<IMenuSelectionContext>(null as unknown as IMenuSelectionContext);

export const useMenuSelectionContext = () => useContext<IMenuSelectionContext>(MenuSelectionContext, "MenuSelectionContext");
