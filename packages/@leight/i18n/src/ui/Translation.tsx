"use client";

import {isString}              from "@leight/utils";
import {
    type FC,
    type ReactNode
}                              from "react";
import {useTranslation}        from "../hook/useTranslation";
import {type IWithTranslation} from "../utils/IWithTranslation";

export interface ITranslationProps extends Omit<IWithTranslation, "withLabel"> {
    /**
     * If a non-string value is provided, label is used directly as a ReactNode.
     */
    withLabel?: ReactNode;
}

/**
 * Simple translation component; uses `useTranslation` under the hood.
 */
export const Translation: FC<ITranslationProps> = (
    {
        namespace,
        label,
        withLabel,
        values,
    }) => {
    const t = useTranslation({
        namespace,
        label,
        values,
    });
    if (!withLabel) {
        return null;
    }
    if (!isString(withLabel)) {
        return <>{withLabel}</>;
    }
    return <>
        {t(withLabel, values)}
    </>;
};
