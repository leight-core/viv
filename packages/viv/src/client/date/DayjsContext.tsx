import {
    contextFactory,
    IDayJsContext
} from "@leight/viv";

export const [
                 DayjsContext,
                 useDayjsContext,
                 useOptionalDayjsContext,
             ] = contextFactory<IDayJsContext>("DayjsContext");
