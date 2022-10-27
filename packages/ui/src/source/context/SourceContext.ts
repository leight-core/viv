import {
    Context,
    ISourceContext
} from "@leight/ui";

export const sourceContextFactory = <TResponse>(name: string) => Context.factory<ISourceContext<TResponse>>(name);

/**
 * @TODO find way how to integrate generics int Source (and others) - if useful
 */
export const [
    SourceContext,
    useSourceContext,
    useOptionalSourceContext,
] = Context.factory<ISourceContext<any>>("SourceContext");
