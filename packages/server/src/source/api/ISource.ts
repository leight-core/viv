import {
    IContainer,
    IWithContainer
} from "@leight/server";
import {
    IEntity,
    InferQuery,
    IPromiseMapper,
    IQuery,
    IWithIdentity,
    UndefinableOptional
} from "@leight/shared";

export interface ISource<//
    TContainer extends IContainer,
    TEntity extends IEntity,
    TItem extends IEntity,
    TQuery extends IQuery = IQuery,
    TCreate extends IEntity = any,
    TBackup extends IEntity = TEntity,
    > extends IWithContainer<TContainer> {
    /**
     * Name of the source.
     */
    readonly name: string;
    readonly mapper: {
        toItem: IPromiseMapper<TEntity, TItem>;
    };

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

    /**
     * Run a query and return promise with the result.
     */
    query(query: TQuery): Promise<TEntity[]>;

    /**
     * Fetch a single optional entity.
     */
    fetch(query: TQuery): Promise<TEntity | null>;

    /**
     * Find required entity; if not found, an error should be thrown.
     */
    find(query: TQuery): Promise<TEntity>;

    /**
     * Get an entity (required) by the given id.
     */

    get(id: string): Promise<TEntity>;

    /**
     * Return count of items by the given query.
     */
    count(query: TQuery): Promise<number>;

    /**
     * General method for converting input filter from a query into an output (for example, applying fulltext).
     */
    withFilter(query: TQuery): InferQuery.Filter<TQuery> | undefined;

    /**
     * This method adds support for making a backup of an entity (thus preparing it for
     * restore counterpart).
     *
     * If nothing is returned, nothing should happen.
     *
     * @param entity
     */
    backup(entity: TEntity): Promise<TBackup | undefined>;

    /**
     * Restore the given backed-up entity; if nothing provided, nothing happens.
     *
     * @param backup
     */
    restore(backup?: TBackup): Promise<TEntity | undefined>;

    /**
     * Resolve ID based on request (for example duplication detection).
     *
     * This should return an ID or throw an exception.
     */
    resolveId(source: TCreate): Promise<TEntity>;

    /**
     * Generates hash string for the given query; it's useful for generating cache key for example.
     */
    hashOf(query: TQuery, type?: string): Promise<string>;

    /**
     * Clear cache, if any.
     */
    clearCache(): Promise<any>;
}

export namespace InferSource {
    export type Container<T> = T extends ISource<infer U, any, any> ? U : T;
    export type Entity<T> = T extends ISource<any, infer U, any> ? U : T;
    export type Item<T> = T extends ISource<any, any, infer U> ? U : T;
    export type Query<T> = T extends ISource<any, any, any, infer U> ? U : T;
    export type Create<T> = T extends ISource<any, any, any, any, infer U> ? U : T;
    export type Patch<T> = T extends ISource<any, any, any, any, infer U> ? UndefinableOptional<U> & IWithIdentity : T;
    export type Backup<T> = T extends ISource<any, any, any, any, any, infer U> ? U : T;
}
