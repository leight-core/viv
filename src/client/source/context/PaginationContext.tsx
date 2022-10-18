import {
    contextFactory,
    IPaginationContext
} from "@leight/viv";

export const [
                 PaginationContext,
                 usePaginationContext,
                 useOptionalPaginationContext,
             ] = contextFactory<IPaginationContext>("PaginationContext");
