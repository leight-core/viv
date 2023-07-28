import {
    type IHrefProps,
    linkTo
} from "@leight/utils";
import {
    useParams,
    useRouter as useCoolRouter
} from "next/navigation";

export const useRouter = () => {
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
