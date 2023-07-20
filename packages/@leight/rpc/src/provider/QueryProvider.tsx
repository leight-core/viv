"use client";

import {
    type QueryClient,
    QueryClientProvider
}                    from "@tanstack/react-query";
import {
    type FC,
    type PropsWithChildren
}                    from "react";
import {RpcProvider} from "../store/RpcStore";

export type IQueryProviderProps = PropsWithChildren<{
    queryClient: QueryClient;
}>;

export const QueryProvider: FC<IQueryProviderProps> = (
    {
        queryClient,
        children
    }) => {
    return <QueryClientProvider client={queryClient}>
        <RpcProvider>
            {children}
        </RpcProvider>
    </QueryClientProvider>;
};
