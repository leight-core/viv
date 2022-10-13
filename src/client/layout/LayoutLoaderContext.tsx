import {
    contextFactory,
    ILoaderContext
} from "@leight-core/viv";

export const [
                 LayoutLoaderContext,
                 useLayoutLoaderContext,
                 useOptionalLayoutLoaderContext,
             ] = contextFactory<ILoaderContext>("LayoutLoaderContext");
