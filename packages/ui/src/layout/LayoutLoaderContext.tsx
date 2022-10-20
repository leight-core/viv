import {
    Context,
    ILoaderContext
} from "@leight/ui";

export const [
                 LayoutLoaderContext,
                 useLayoutLoaderContext,
                 useOptionalLayoutLoaderContext,
             ] = Context.factory<ILoaderContext>("LayoutLoaderContext");
