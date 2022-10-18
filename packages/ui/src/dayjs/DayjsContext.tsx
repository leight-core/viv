import {
    Context,
    IDayJsContext
} from "@leight/ui";

export const [
                 DayjsContext,
                 useDayjsContext,
                 useOptionalDayjsContext,
             ] = Context.factory<IDayJsContext>("DayjsContext");
