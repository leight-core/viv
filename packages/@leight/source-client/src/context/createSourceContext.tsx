import {createStoreContext} from "@leight/context-client";
import {
    type IEntitySchema,
    type ISourceStoreProps
}                           from "@leight/source";
import {z}                  from "zod";


export interface ICreateSourceContextProps<TSchema extends IEntitySchema> {
    readonly name: string;
    readonly schema: TSchema;
    readonly entities?: z.infer<TSchema>[];
}

export const createSourceContext = <TSchema extends IEntitySchema>(
    {
        name,
        schema,
        entities = [],
    }: ICreateSourceContextProps<TSchema>) => {
    return createStoreContext<ISourceStoreProps<TSchema>>(
        (set) => ({
            schema,
            entities,
            isLoading:  false,
            isFetching: false,
            setEntities(entities?: z.infer<TSchema>[]) {
                set({entities});
            },
            setIsLoading(isLoading) {
                set({isLoading});
            },
            setIsFetching(isFetching) {
                set({isFetching});
            },
        }),
        `[${name}] SourceContext`,
        `Add [${name}] SourceProvider`,
    );
};
