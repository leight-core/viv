import {
    isString,
    linkTo
}                        from "@leight/utils";
import {type IHrefProps} from "@leight/utils/lib";
import CoolLink          from "next/link";
import {
    type ComponentProps,
    type FC
}                        from "react";
import {useRouter}       from "../hook/useRouter";

export interface ILinkProps extends Omit<ComponentProps<typeof CoolLink>, "href"> {
    href: IHrefProps | string;
}

export const Link: FC<ILinkProps> = (
    {
        href,
        ...props
    }) => {
    const {locale} = useRouter();
    console.log("Locale link", locale, href);
    return <CoolLink
        href={linkTo(isString(href) ? {
            href,
        } : {
            href:  `/${locale}${href.href}`,
            query: href.query,
        })}
        {...props}
    />;
};
