import {
    contextFactory,
    ILoaderContext
} from "@leight/viv";

export const [
                 LayoutLoaderContext,
                 useLayoutLoaderContext,
                 useOptionalLayoutLoaderContext,
             ] = contextFactory<ILoaderContext>("LayoutLoaderContext");
