import {
    contextFactory,
    ILoaderContext
} from "@leight-core/viv";

export const [
                 FormLoaderContext,
                 useFormLoaderContext,
                 useOptionalFormLoaderContext,
             ] = contextFactory<ILoaderContext>("FormLoaderContext");
