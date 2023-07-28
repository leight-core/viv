"use client";

import {
    type IHrefProps,
    linkTo
} from "@leight/utils";
import {
    useParams,
    useRouter as useCoolRouter
} from "next/navigation";

/**
 * Router with locale; expects "locale" parameter in Next.js `useParams` hook.
 */
export const useLocaleRouter = () => {
    const router = useCoolRouter();
    const {locale} = useParams() as unknown as {
        locale: string
    };
    /**
     * Mimic original next.js router, override push
     */
    return {
        locale,
        ...router,
        push: ({
                   href,
                   query
               }: IHrefProps) => router.push(linkTo({
            href: `/${locale ?? ""}${href}`,
            query,
        })),
    } as const;
};
