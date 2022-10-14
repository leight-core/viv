import {
    contextFactory,
    ILoaderContext
} from "@leight-core/viv";

export const [
                 LoaderContext,
                 useLoaderContext,
                 useOptionalLoaderContext,
             ] = contextFactory<ILoaderContext>("LoaderContext");
