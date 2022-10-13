import {
    IFormContext,
    useContext,
    useOptionalContext
}                      from "@leight-core/viv";
import {createContext} from "react";

/**
 * Access to current Form Context; do not use this directly, see {@link useFormContext}.
 */
export const FormContext = createContext<IFormContext>(null as any);

/**
 * Form context is useful for creating any kind of form as it provides a lot of useful
 * features.
 */
export const useFormContext = <TValues = any>() => useContext<IFormContext<TValues>>(FormContext, "FormContext");

export const useOptionalFormContext = <TValues = any>() => useOptionalContext<IFormContext<TValues> | null>(FormContext as any);
