import {
    contextFactory,
    IMobileFormItemContext
} from "@leight-core/viv";

export const [
                 MobileFormItemContext,
                 useMobileFormItemContext,
                 useOptionalMobileFormItemContext,
             ] = contextFactory<IMobileFormItemContext>("MobileFormItemContext");
