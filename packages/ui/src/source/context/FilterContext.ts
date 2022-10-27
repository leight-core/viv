import {
    Context,
    IFilterContext
} from "@leight/ui";

/**
 * Create typed filter context.
 * @param name
 */
export const filterContextFactory = <TFilter>(name: string) => Context.factory<IFilterContext<TFilter>>(name);

export const [
                 FilterContext,
                 useFilterContext,
                 useOptionalFilterContext,
             ] = Context.factory<IFilterContext>("FilterContext");
