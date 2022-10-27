import {
    Context,
    IOrderByContext
} from "@leight/ui";

/**
 * Create typed order by context.
 * @param name
 */
export const orderByContextFactory = <TOrderBy>(name: string) => Context.factory<IOrderByContext<TOrderBy>>(name);

export const [
                 OrderByContext,
                 useOrderByContext,
                 useOptionalOrderByContext,
             ] = Context.factory<IOrderByContext>("OrderByContext");
