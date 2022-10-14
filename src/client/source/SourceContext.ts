import {
    contextFactory,
    ISourceContext
} from "@leight-core/viv";

export const sourceContextFactory = <TResponse>(name: string) => contextFactory<ISourceContext<TResponse>>(name);

/**
 * @TODO find way how to integrate generics int Source (and others) - if useful
 */
export const [
    SourceContext,
    useSourceContext,
    useOptionalSourceContext,
] = contextFactory<ISourceContext<any>>("SourceContext");
