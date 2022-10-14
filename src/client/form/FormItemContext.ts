import {
    contextFactory,
    IFormItemContext
} from "@leight-core/viv";

export const [
                 FormItemContext,
                 useFormItemContext,
                 useOptionalFormItemContext,
             ] = contextFactory<IFormItemContext>("FormItemContext");
