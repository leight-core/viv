import {
    contextFactory,
    II18NextContext
} from "@leight/viv";

export const [
                 I18NextContext,
                 useI18NextContext,
                 useOptionalI18NextContext
             ] = contextFactory<II18NextContext>("I18NextContext");
