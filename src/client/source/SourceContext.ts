import {
    ISourceContext,
    useContext,
    useOptionalContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const SourceContext = createContext<ISourceContext<any>>(null as any);

export const useSourceContext         = <TResponse>() => useContext<ISourceContext<TResponse>>(SourceContext, "SourceContext");
export const useOptionalSourceContext = <TResponse>() => useOptionalContext<ISourceContext<TResponse>>(SourceContext as any);
