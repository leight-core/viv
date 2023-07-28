import {useEffect} from "react";
import {useRouter} from "./useRouter";

export const useRedirect = (href: string) => {
    const {push} = useRouter();
    useEffect(() => {
        push(href);
    }, []);
};
