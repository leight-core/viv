import {type IHrefProps} from "@leight/utils";
import {useEffect}       from "react";
import {useLocaleRouter} from "./useLocaleRouter";

export const useLocaleRedirect = (href: IHrefProps) => {
    const {push} = useLocaleRouter();
    useEffect(() => {
        push(href);
    }, []);
};
