import {ISession}        from "@leight/shared";
import {UseQueryOptions} from "@tanstack/react-query";

export interface IUseSessionRequest {
    required?: boolean;
    redirectTo?: string;
    queryConfig?: Omit<UseQueryOptions<any, any, ISession, any>, "queryKey" | "queryFn">;
}
