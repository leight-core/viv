import {
    contextFactory,
    IMobileFormItemContext
} from "@leight/viv";

export const [
                 MobileFormItemContext,
                 useMobileFormItemContext,
                 useOptionalMobileFormItemContext,
             ] = contextFactory<IMobileFormItemContext>("MobileFormItemContext");
