import {
    fetchSession,
    IUseSessionRequest
}                  from "@leight/ui";
import {ISession}  from "@leight/viv";
import {useQuery}  from "@tanstack/react-query";
import {useRouter} from "next/router";

export function useSession(
    {
        required = true,
        redirectTo = "/api/auth/signin?error=SessionRequired",
        queryConfig = {},
    }: IUseSessionRequest = {}) {
    const router = useRouter();
    return useQuery<ISession>(["session"], fetchSession, {
        staleTime:            60 * 100 * 5 * 3,
        refetchOnWindowFocus: "always",
        refetchInterval:      60 * 100 * 5,
        keepPreviousData:     true,
        ...queryConfig,
        onSettled(data, error) {
            queryConfig?.onSettled?.(data, error);
            if (!data && required) {
                router.push(redirectTo);
            }
        },
    });
}
