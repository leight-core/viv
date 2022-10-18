import {
    IContainer,
    ISource,
    IWithContainer
}               from "@leight/server";
import {
    ClientError,
    IEntity,
    InferQuery,
    IPromiseMapper,
    IQuery,
    IWithIdentity,
    PromiseMapper,
    UndefinableOptional
}               from "@leight/shared";
import {hashOf} from "@leight/utils";
import {Prisma} from "@prisma/client";
import LRUCache from "lru-cache";

export abstract class AbstractSource<//
    TContainer extends IContainer,
    TEntity extends IEntity,
    TItem extends IEntity,
    TQuery extends IQuery = IQuery,
    TCreate extends IEntity = IEntity,
    TBackup extends IEntity = TEntity,
    > implements ISource<//
    TContainer,
    TEntity,
    TItem,
    TQuery,
    TCreate,
    TBackup
    //
    >,
    IWithContainer<TContainer> {
    readonly name: string;
    readonly mapper: { toItem: IPromiseMapper<TEntity, TItem> };
    container: TContainer;
    cache?: {
        count?: LRUCache<string, number>;
        query?: LRUCache<string, TEntity[]>;
    };

    protected constructor(name: string, container: TContainer) {
        this.name      = name;
        this.container = container;
        this.mapper    = {
            toItem: PromiseMapper(this.toItem.bind(this)),
        };
    }

    withContainer(container: TContainer): this {
        this.container = container;
        return this;
    }

    async create(create: TCreate): Promise<TEntity> {
        return this.onUnique(
            async () => {
                const result = await this.$create(create);
                await this.clearCache();
                return result;
            },
            async e => {
                if (e instanceof Prisma.PrismaClientKnownRequestError && Array.isArray(e.meta?.target)) {
                    throw new ClientError(`Unique error on [${this.name}.${(e.meta?.target?.join(","))}]`);
                }
                throw new ClientError(e.message, 409);
            }
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async $create(create: TCreate): Promise<TEntity> {
        throw new Error(`Source [${this.name}] does not support item creation.`);
    }

    async patch(patch: UndefinableOptional<TCreate> & IWithIdentity): Promise<TEntity> {
        return this.onUnique(
            async () => {
                const result = await this.$patch(patch);
                await this.clearCache();
                return result;
            },
            async e => {
                if (e instanceof Prisma.PrismaClientKnownRequestError && Array.isArray(e.meta?.target)) {
                    throw new ClientError(`Unique error on [${this.name}.${(e.meta?.target?.join(","))}]`);
                }
                throw new ClientError(e.message, 409);
            }
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async $patch(patch: UndefinableOptional<TCreate> & IWithIdentity): Promise<TEntity> {
        throw new Error(`Source [${this.name}] does not support item patching.`);
    }

    async import(create: TCreate): Promise<TEntity> {
        return this.onUnique(
            () => this.$create(create),
            async () => this.$patch({
                ...create,
                id: (await this.resolveId(create)).id,
            })
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async backup(entity: TEntity): Promise<TBackup | undefined> {
        return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async restore(backup?: TBackup): Promise<TEntity | undefined> {
        throw new Error(`Source [${this.name}] does not support restoring backups.`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async resolveId(source: TCreate): Promise<TEntity> {
        throw new Error(`Source [${this.name}] does not support mapping Create object to an ID.`);
    }

    async remove(ids: string[]): Promise<TEntity[]> {
        const result = await this.$remove(ids);
        await this.clearCache();
        return result;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async $remove(ids: string[]): Promise<TEntity[]> {
        throw new Error(`Source [${this.name}] does not support item deletion.`);
    }

    async get(id: string): Promise<TEntity> {
        return this.$get(id);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async $get(id: string): Promise<TEntity> {
        throw new Error(`Source [${this.name}] does not support getting an item by an id.`);
    }

    async fetch(query: TQuery): Promise<TEntity | null> {
        try {
            return await this.find(query);
        } catch (e) {
            console.warn(e);
            return null;
        }
    }

    async find(query: TQuery): Promise<TEntity> {
        return this.$find(query);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async $find(query: TQuery): Promise<TEntity> {
        throw new Error(`Source [${this.name}] does not support finding an item by a query.`);
    }

    async query(query: TQuery): Promise<TEntity[]> {
        const hash = await this.hashOf(query, "query");
        if (this.cache?.query && !this.cache?.query?.has(hash)) {
            this.cache?.query?.set(hash, await this.$query(query));
        }
        return this.cache?.query?.get(hash) || this.$query(query);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async $query(query: TQuery): Promise<TEntity[]> {
        throw new Error(`Source [${this.name}] does not support querying items.`);
    }

    async count(query: TQuery): Promise<number> {
        const hash = await this.hashOf(query, "count");
        if (this.cache?.count && !this.cache?.count?.has(hash)) {
            this.cache?.count?.set(hash, await this.$count(query));
        }
        return this.cache?.count?.get(hash) || this.$count(query);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async $count(query: TQuery): Promise<number> {
        throw new Error(`Source [${this.name}] does not support counting items by a query.`);
    }

    withFilter({filter}: TQuery): InferQuery.Filter<TQuery> | undefined {
        return filter;
    }

    hashOf(query: TQuery, type?: string): Promise<string> {
        return hashOf(JSON.stringify({
            query,
            type,
            userId: this.container.user.optional(),
        }));
    }

    async clearCache(): Promise<any> {
        this.cache?.query?.clear();
        this.cache?.count?.clear();
        await this.$clearCache();
    }

    async $clearCache(): Promise<any> {
    }

    async truncate(): Promise<void> {
        await this.$truncate();
        await this.clearCache();
    }

    async $truncate(): Promise<void> {
    }

    /**
     * Unique handler for various callbacks, mostly for create/patch.
     *
     * @param create
     * @param callback
     */
    async onUnique<T>(create: () => Promise<T>, callback: (e: Error) => Promise<T>): Promise<T> {
        try {
            return await create();
        } catch (e) {
            if (e instanceof Error) {
                if (e.message.includes("Unique constraint failed")) {
                    return callback(e);
                }
            }
            throw e;
        }
    }

    abstract toItem(source: TEntity): Promise<TItem>;
}
