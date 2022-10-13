import {
    contextFactory,
    IDayJsContext
} from "@leight-core/viv";

export const [
                 DayjsContext,
                 useDayjsContext,
                 useOptionalDayjsContext,
             ] = contextFactory<IDayJsContext>("DayjsContext");
