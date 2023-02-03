import {ISourceContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext, useOptionalContext} from "../context";

export const SourceContext = createContext<ISourceContext<any>>(null as any);

export const useSourceContext = <TResponse>() => useContext<ISourceContext<TResponse>>(SourceContext, "SourceContext");
export const useOptionalSourceContext = <TResponse>() => useOptionalContext<ISourceContext<TResponse>>(SourceContext as any);
