import {
    contextFactory,
    IOrderByContext
} from "@leight/viv";

/**
 * Create typed order by context.
 * @param name
 */
export const orderByContextFactory = <TOrderBy>(name: string) => contextFactory<IOrderByContext<TOrderBy>>(name);

export const [
                 OrderByContext,
                 useOrderByContext,
                 useOptionalOrderByContext,
             ] = contextFactory<IOrderByContext>("OrderByContext");
