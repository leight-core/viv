import {
    IWithIdentity,
    UndefinableOptional
} from "@leight/shared";

export interface IMutationSource<//
    TCreate extends Record<string, any>,
    TEntity extends Record<string, any>,
    > {
    /**
     * Creates a new entity by the given request.
     */
    create(create: TCreate): Promise<TEntity>;

    /**
     * Patches the given entity.
     */
    patch(patch: UndefinableOptional<TCreate> & IWithIdentity): Promise<TEntity>;

    /**
     * Delete given entities by the list of given ids.
     */
    remove(ids: string[]): Promise<TEntity[]>;

    /**
     * Remove all the data from this source and all dependant sources.
     *
     * The original use case for this method is an ability to restore data (thus clean
     * sources used for restoring and importing fresh data).
     */
    truncate(): Promise<void>;
}

export namespace InferMutationSource {
    export type Create<T> = T extends IMutationSource<infer U, any> ? U : T;
    export type Entity<T> = T extends IMutationSource<any, infer U> ? U : T;
}
