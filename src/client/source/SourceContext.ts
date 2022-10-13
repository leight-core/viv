import {
    contextFactory,
    ISourceContext
} from "@leight-core/viv";

export const sourceContextFactory = <TResponse>(name: string) => contextFactory<ISourceContext<TResponse>>(name);

export const [
                 SourceContext,
                 useSourceContext,
                 useOptionalSourceContext,
             ] = contextFactory<ISourceContext<any>>("SourceContext");
