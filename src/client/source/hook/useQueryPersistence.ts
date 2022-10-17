import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import {QueryClient}                from "@tanstack/react-query";
import {persistQueryClient}         from "@tanstack/react-query-persist-client";
import {useEffect}                  from "react";

export function useQueryPersistence(queryClient: QueryClient, name: string, buster?: string, enable: boolean = process.env.NEXT_PUBLIC_CACHE === "true"): boolean {
    useEffect(() => {
        enable && persistQueryClient({
            queryClient,
            persister: createSyncStoragePersister({storage: window.sessionStorage}),
            buster:    buster || process.env.BUILD_ID,
        });
    }, []);
    return enable;
}
