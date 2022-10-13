import {ISession}  from "@leight-core/viv";
import {
    useQuery,
    UseQueryOptions
}                  from "@tanstack/react-query";
import {useRouter} from "next/router";

export async function fetchSession() {
    const res     = await fetch("/api/auth/session");
    const session = await res.json();
    if (Object.keys(session).length) {
        return session;
    }
    return null;
}

export interface IUseSessionRequest {
    required?: boolean;
    redirectTo?: string;
    queryConfig?: Omit<UseQueryOptions<any, any, ISession, any>, "queryKey" | "queryFn">;
}

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
