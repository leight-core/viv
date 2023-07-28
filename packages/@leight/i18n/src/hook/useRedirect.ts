import {type IHrefProps} from "@leight/utils";
import {useEffect}       from "react";
import {useRouter}       from "./useRouter";

export const useRedirect = (href: IHrefProps) => {
    const {push} = useRouter();
    useEffect(() => {
        push(href);
    }, []);
};
