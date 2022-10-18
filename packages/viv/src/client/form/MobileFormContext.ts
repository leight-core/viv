import {
    contextFactory,
    IMobileFormContext
} from "@leight/viv";

export const [
                 MobileFormContext,
                 useMobileFormContext,
                 useOptionalMobileFormContext,
             ] = contextFactory<IMobileFormContext>("MobileFormContext");
