import buildUrl    from "build-url-ts";
import CoolLink    from "next/link";
import {
    type ComponentProps,
    type FC
}                  from "react";
import {useRouter} from "../hook/useRouter";

export interface ILinkProps extends ComponentProps<typeof CoolLink> {
    query?: Record<string, any> | undefined | null;
}

export const Link: FC<ILinkProps> = (
    {
        href,
        query,
        ...props
    }) => {
    const {locale} = useRouter();
    return <CoolLink
        href={buildUrl({
            path:        `/${locale}${href}`,
            queryParams: query || undefined,
        })}
        {...props}
    />;
};
