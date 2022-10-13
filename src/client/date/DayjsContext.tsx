import {IDayJsContext} from "@leight-core/api";
import {useContext}    from "@leight-core/client";
import {createContext} from "react";

export const DayjsContext = createContext(null as unknown as IDayJsContext);

export const useDayjsContext = () => useContext(DayjsContext, "DayjsContext");
