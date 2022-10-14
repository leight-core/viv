import {
    contextFactory,
    IFormContext
} from "@leight-core/viv";

export const [
                 FormContext,
                 useFormContext,
                 useOptionalFormContext,
             ] = contextFactory<IFormContext>("FormContext");
