import {type IStoreProvider} from "@leight/context";
import {useCursorState}      from "@leight/cursor-client";
import {type IQuerySchema}   from "@leight/query";
import {
    type IEntitySchema,
    type ISourceStoreProps,
    type IUseSourceQuery,
}                            from "@leight/source";
import {isCallable}          from "@leight/utils";
import {type IStoreApi}      from "@leight/zustand";
import {
    ReactNode,
    useEffect
}                            from "react";
import {z}                   from "zod";

export interface ISourceInternalProps<
    TQuerySchema extends IQuerySchema,
    TSchema extends IEntitySchema,
> {
    /**
     * Shape of the data this Source is operating on
     */
    readonly schema: TSchema;
    /**
     * React query used to actually query data
     */
    readonly useSourceQuery: IUseSourceQuery<TQuerySchema, TSchema>;
    readonly SourceProvider: IStoreProvider<ISourceStoreProps<TSchema>>;
    readonly children?: ((store: IStoreApi<ISourceStoreProps<TSchema>>) => ReactNode) | ReactNode;

    /**
     * Optional callback when data is fetched
     */
    onSuccess?(entities: z.infer<TSchema>[]): void;
}

export type ISourceProps<
    TQuerySchema extends IQuerySchema,
    TSchema extends IEntitySchema,
> = Omit<ISourceInternalProps<TQuerySchema, TSchema>, "schema" | "SourceProvider" | "useSourceQuery">;

interface IInternalSourceProps<
    TQuerySchema extends IQuerySchema,
    TSchema extends IEntitySchema,
> extends Pick<ISourceInternalProps<TQuerySchema, TSchema>, "schema" | "useSourceQuery" | "onSuccess" | "children"> {
    readonly sourceContext: IStoreApi<ISourceStoreProps<TSchema>>;
}

const InternalSource = <
    TQuerySchema extends IQuerySchema,
    TSchema extends IEntitySchema,
>({
      sourceContext,
      schema,
      useSourceQuery,
      onSuccess,
      children,
  }: IInternalSourceProps<TQuerySchema, TSchema>) => {
    const {page, size} = useCursorState(({page, size}) => ({page, size}));
    const result       = useSourceQuery({
        cursor: {
            page,
            size,
        }
    }, {
        onSuccess,
    });

    useEffect(() => {
        if (result.isSuccess) {
            const $data = result.data.filter(item => schema.safeParse(item).success);
            onSuccess?.($data);
            sourceContext.state.setEntities($data);
        }
    }, [
        page,
        size,
        result.isSuccess,
        result.isLoading,
        result.isFetching,
    ]);
    useEffect(() => {
        sourceContext.state.setIsLoading(result.isLoading);
    }, [result.isLoading]);
    useEffect(() => {
        sourceContext.state.setIsFetching(result.isFetching);
    }, [result.isFetching]);

    return <>{isCallable(children) ? children(sourceContext) : children}</>;
};

export const Source = <
    TQuerySchema extends IQuerySchema,
    TSchema extends IEntitySchema,
>(
    {
        schema,
        useSourceQuery,
        onSuccess,
        SourceProvider,
        children,
        ...props
    }: ISourceInternalProps<TQuerySchema, TSchema>) => {
    return <SourceProvider
        {...props}
    >
        {(sourceContext) => <InternalSource
            sourceContext={sourceContext}
            schema={schema}
            useSourceQuery={useSourceQuery}
            onSuccess={onSuccess}
        >
            {children}
        </InternalSource>}
    </SourceProvider>;
};
