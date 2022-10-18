import {
    contextFactory,
    ILoaderContext
} from "@leight/viv";

export const [
                 FormLoaderContext,
                 useFormLoaderContext,
                 useOptionalFormLoaderContext,
             ] = contextFactory<ILoaderContext>("FormLoaderContext");
