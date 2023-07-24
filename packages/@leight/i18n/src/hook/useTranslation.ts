import {isString}              from "@leight/utils";
import {useTranslations}       from "next-intl";
import {isTranslation}         from "../utils/isTranslation";
import {type IWithTranslation} from "../utils/IWithTranslation";

export const useTranslation = (input?: string | IWithTranslation) => {
    return useTranslations(
        isString(input) ?
            input :
            isTranslation(input) ?
                input.namespace :
                undefined
    );
};
