import {IMobileFormItemContext} from "@leight-core/api";
import {
	useContext,
	useOptionalContext
}                               from "@leight-core/client";
import {createContext}          from "react";

export const MobileFormItemContext = createContext<IMobileFormItemContext>(null as any);

export const useMobileFormItemContext = () => useContext<IMobileFormItemContext>(MobileFormItemContext, "MobileFormItemContext");

export const useOptionalMobileFormItemContext = () => useOptionalContext<IMobileFormItemContext>(MobileFormItemContext as any);
