import {
    type IHrefProps,
    isString
}                        from "@leight/utils";
import {useLocaleRouter} from "./useLocaleRouter";

export const useWithLocaleRedirect = () => {
    const {push} = useLocaleRouter();
    return (href?: IHrefProps | string | null) => href && push(isString(href) ? {
        href,
    } : {
        href:  href.href,
        query: href.query,
    });
};

export type IUseWithLocaleRedirect = ReturnType<typeof useWithLocaleRedirect>;
