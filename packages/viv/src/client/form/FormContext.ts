import {
    contextFactory,
    IFormContext
} from "@leight/viv";

export const [
                 FormContext,
                 useFormContext,
                 useOptionalFormContext,
             ] = contextFactory<IFormContext>("FormContext");
