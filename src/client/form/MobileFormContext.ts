import {
    contextFactory,
    IMobileFormContext
} from "@leight-core/viv";

export const [
                 MobileFormContext,
                 useMobileFormContext,
                 useOptionalMobileFormContext,
             ] = contextFactory<IMobileFormContext>("MobileFormContext");
