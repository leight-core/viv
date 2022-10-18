import {
    contextFactory,
    IFormItemContext
} from "@leight/viv";

export const [
                 FormItemContext,
                 useFormItemContext,
                 useOptionalFormItemContext,
             ] = contextFactory<IFormItemContext>("FormItemContext");
