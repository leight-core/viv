"use client";

import {type FC} from "react";
import {
    type IUseDetectLocaleProps,
    useDetectLocale
}                from "../hook/useDetectLocale";

export type IDetectLocaleProps = IUseDetectLocaleProps;

export const DetectLocale: FC<IDetectLocaleProps> = (
    {
        locale,
        callback,
    }) => {
    useDetectLocale({
        locale,
        callback
    });
    return null;
};
