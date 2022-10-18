import {QueryClient} from "@tanstack/react-query";

/**
 * @param cacheTime cache time in hours
 */
export function createQueryClient(cacheTime = 24): QueryClient {
    return new QueryClient({
        defaultOptions: {
            queries: {
                cacheTime:        1000 * 60 * 60 * cacheTime,
                keepPreviousData: true,
            }
        }
    });
}
