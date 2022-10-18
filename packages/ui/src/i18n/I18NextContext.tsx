import {
    Context,
    II18NextContext
} from "@leight/ui";

export const [
                 I18NextContext,
                 useI18NextContext,
                 useOptionalI18NextContext
             ] = Context.factory<II18NextContext>("I18NextContext");
