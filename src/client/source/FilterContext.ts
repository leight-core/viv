import {
    contextFactory,
    IFilterContext
} from "@leight-core/viv";

/**
 * Create typed filter context.
 * @param name
 */
export const filterContextFactory = <TFilter>(name: string) => contextFactory<IFilterContext<TFilter>>(name);

export const [
                 FilterContext,
                 useFilterContext,
                 useOptionalFilterContext,
             ] = contextFactory<IFilterContext>("FilterContext");
