import {IFormItemContext} from "@leight-core/api";
import {createContext}    from "react";
import {
	useContext,
	useOptionalContext
}                         from "../context";

export const FormItemContext = createContext<IFormItemContext>(null as any);

export const useFormItemContext = () => useContext<IFormItemContext>(FormItemContext, "FormItemContext");

export const useOptionalFormItemContext = () => useOptionalContext<IFormItemContext>(FormItemContext as any);
