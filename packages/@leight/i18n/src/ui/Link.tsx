import {
    type IHrefQuery,
    linkTo
}                  from "@leight/utils";
import CoolLink    from "next/link";
import {
    type ComponentProps,
    type FC
}                  from "react";
import {useRouter} from "../hook/useRouter";

export interface ILinkProps extends ComponentProps<typeof CoolLink> {
    query?: IHrefQuery;
}

export const Link: FC<ILinkProps> = (
    {
        href,
        query,
        ...props
    }) => {
    const {locale} = useRouter();
    return <CoolLink
        href={linkTo({
            href: `/${locale}${href}`,
            query,
        })}
        {...props}
    />;
};
