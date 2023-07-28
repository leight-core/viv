import {
    type IHrefProps,
    isString,
    linkTo
}                        from "@leight/utils";
import CoolLink          from "next/link";
import {
    type ComponentProps,
    type FC
}                        from "react";
import {useLocaleRouter} from "../hook/useLocaleRouter";

export interface ILocaleLinkProps extends Omit<ComponentProps<typeof CoolLink>, "href"> {
    href: IHrefProps | string;
}

export const LocaleLink: FC<ILocaleLinkProps> = (
    {
        href,
        ...props
    }) => {
    const {locale} = useLocaleRouter();
    return <CoolLink
        href={linkTo(isString(href) ? {
            href: `/${locale}${href}`,
        } : {
            href:  `/${locale}${href.href}`,
            query: href.query,
        })}
        {...props}
    />;
};
