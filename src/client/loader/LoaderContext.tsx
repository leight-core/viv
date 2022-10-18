import {
    contextFactory,
    ILoaderContext
} from "@leight/viv";

export const [
                 LoaderContext,
                 useLoaderContext,
                 useOptionalLoaderContext,
             ] = contextFactory<ILoaderContext>("LoaderContext");
