import {
    IMobileFormContext,
    useContext,
    useOptionalContext
}                      from "@leight-core/viv";
import {createContext} from "react";

/**
 * Access to current MobileForm Context; do not use this directly, see {@link useMobileFormContext}.
 */
export const MobileFormContext = createContext<IMobileFormContext>(null as any);

/**
 * MobileForm context is useful for creating any kind of form as it provides a lot of useful
 * features.
 */
export const useMobileFormContext = <TValues = any>() => useContext<IMobileFormContext<TValues>>(MobileFormContext, "MobileFormContext");

export const useOptionalMobileFormContext = <TValues = any>() => useOptionalContext<IMobileFormContext<TValues> | null>(MobileFormContext as any);
