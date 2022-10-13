import {
    IMobileFormItemContext,
    useContext,
    useOptionalContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const MobileFormItemContext = createContext<IMobileFormItemContext>(null as any);

export const useMobileFormItemContext = () => useContext<IMobileFormItemContext>(MobileFormItemContext, "MobileFormItemContext");

export const useOptionalMobileFormItemContext = () => useOptionalContext<IMobileFormItemContext>(MobileFormItemContext as any);
