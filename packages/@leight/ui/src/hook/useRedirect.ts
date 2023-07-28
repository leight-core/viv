import {useRouter} from "next/navigation";
import {useEffect} from "react";

/**
 * Pure redirect without locale
 */
export const useRedirect = (href: string) => {
    const {push} = useRouter();
    useEffect(() => {
        push(href);
    }, []);
};
