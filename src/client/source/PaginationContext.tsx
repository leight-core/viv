import {
    contextFactory,
    IPaginationContext
} from "@leight-core/viv";

export const [
                 PaginationContext,
                 usePaginationContext,
                 useOptionalPaginationContext,
             ] = contextFactory<IPaginationContext>("PaginationContext");
