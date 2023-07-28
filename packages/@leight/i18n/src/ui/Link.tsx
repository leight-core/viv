import {
    type IHrefProps,
    isString,
    linkTo
}                  from "@leight/utils";
import CoolLink    from "next/link";
import {
    type ComponentProps,
    type FC
}                  from "react";
import {useRouter} from "../hook/useRouter";

export interface ILinkProps extends Omit<ComponentProps<typeof CoolLink>, "href"> {
    href: IHrefProps | string;
}

export const Link: FC<ILinkProps> = (
    {
        href,
        ...props
    }) => {
    const {locale} = useRouter();
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
