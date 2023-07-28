import {
    type IHrefProps,
    linkTo
}                  from "@leight/utils";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

/**
 * Pure redirect without locale
 */
export const useRedirect = (href: IHrefProps) => {
    const {push} = useRouter();
    useEffect(() => {
        push(linkTo(href));
    }, []);
};
