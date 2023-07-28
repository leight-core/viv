import {type IHrefProps} from "@leight/utils";
import {useLocaleRouter} from "./useLocaleRouter";

export const useWithLocaleRedirect = () => {
    const {push} = useLocaleRouter();
    return (href: IHrefProps) => push(href);
};
