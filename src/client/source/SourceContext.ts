import {ISourceContext} from "@leight-core/api";
import {
	useContext,
	useOptionalContext
}                       from "@leight-core/client";
import {createContext}  from "react";

export const SourceContext = createContext<ISourceContext<any>>(null as any);

export const useSourceContext         = <TResponse>() => useContext<ISourceContext<TResponse>>(SourceContext, "SourceContext");
export const useOptionalSourceContext = <TResponse>() => useOptionalContext<ISourceContext<TResponse>>(SourceContext as any);
