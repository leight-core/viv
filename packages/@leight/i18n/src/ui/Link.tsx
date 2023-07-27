import CoolLink    from "next/link";
import {
    type ComponentProps,
    type FC
}                  from "react";
import {useRouter} from "../hook/useRouter";

export interface ILinkProps extends ComponentProps<typeof CoolLink> {
}

export const Link: FC<ILinkProps> = (
    {
        href,
        ...props
    }) => {
    const {locale} = useRouter();
    return <CoolLink
        href={`/${locale}${href}`}
        {...props}
    />;
};
