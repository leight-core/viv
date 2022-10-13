import {
    IDayJsContext,
    useContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const DayjsContext = createContext(null as unknown as IDayJsContext);

export const useDayjsContext = () => useContext(DayjsContext, "DayjsContext");
