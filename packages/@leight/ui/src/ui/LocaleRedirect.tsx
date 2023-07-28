"use client";

import {
    DetectLocale,
    type ILocaleOfProps
}                       from "@leight/i18n";
import {LoadingOverlay} from "@mantine/core";
import {redirect}       from "next/navigation";
import {type FC}        from "react";

export interface ILocaleRedirectProps {
    locale: ILocaleOfProps;
}

export const LocaleRedirect: FC<ILocaleRedirectProps> = (
    {
        locale,
    }) => {
    return <>
        <DetectLocale
            locale={locale}
            callback={({locale}) => redirect(`/${locale}`)}
        />
        <LoadingOverlay visible={true}/>
    </>;
};
