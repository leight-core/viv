import {
    useParams,
    useRouter as useCoolRouter
} from "next/navigation";

export const useRouter = () => {
    const router = useCoolRouter();
    const {locale} = useParams();
    /**
     * Mimic original next.js router, override push
     */
    return {
        locale,
        ...router,
        push: (href: string) => router.push(`/${locale ?? ""}${href}`),
    } as const;
};
