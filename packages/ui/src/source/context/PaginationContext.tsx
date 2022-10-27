import {
    Context,
    IPaginationContext
} from "@leight/ui";

export const [
                 PaginationContext,
                 usePaginationContext,
                 useOptionalPaginationContext,
             ] = Context.factory<IPaginationContext>("PaginationContext");
