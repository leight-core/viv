import {IDayJsContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext} from "../context";

export const DayjsContext = createContext(null as unknown as IDayJsContext);

export const useDayjsContext = () => useContext(DayjsContext, "DayjsContext");
