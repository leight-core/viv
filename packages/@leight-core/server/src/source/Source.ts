import {
	ClientError,
	IContainer,
	InferQuery,
	InferSource,
	IPromiseMapper,
	ISource,
	IWithIdentity,
	UndefinableOptional
}                      from "@leight-core/api";
import {PromiseMapper} from "@leight-core/utils";
import LRUCache        from "lru-cache";
import crypto          from "node:crypto";
import {onUnique}      from "./onUnique";

export abstract class AbstractSource<
	TSource extends ISource<IContainer, any, any>,
> implements ISource<//
	InferSource.Container<TSource>,
	InferSource.Entity<TSource>,
	InferSource.Item<TSource>,
	InferSource.Query<TSource>,
	InferSource.Create<TSource>,
	InferSource.Backup<TSource>> {
	readonly name: string;
	readonly mapper: { toItem: IPromiseMapper<InferSource.Entity<TSource>, InferSource.Item<TSource>> };

	container: InferSource.Container<TSource>;
	cache?: {
		count?: LRUCache<string, number>;
		query?: LRUCache<string, InferSource.Entity<TSource>[]>;
	};

	protected constructor(name: string, container: InferSource.Container<TSource>) {
		this.name      = name;
		this.container = container;
		this.mapper    = {
			toItem: PromiseMapper(this.toItem.bind(this)),
		};
		this.cache     = undefined;
	}

	withContainer(container: InferSource.Container<TSource>): this {
		this.container = container;
		return this;
	}

	async create(create: InferSource.Create<TSource>): Promise<InferSource.Entity<TSource>> {
		return onUnique(
			async () => {
				const result = await this.$create(create);
				await this.clearCache();
				return result;
			},
			async e => {
				throw new ClientError(e.message, 409);
			}
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async $create(create: InferSource.Create<TSource>): Promise<InferSource.Entity<TSource>> {
		throw new Error(`Source [${this.name}] does not support item creation.`);
	}

	async patch(patch: UndefinableOptional<InferSource.Create<TSource>> & IWithIdentity): Promise<InferSource.Entity<TSource>> {
		return onUnique(
			async () => {
				const result = await this.$patch(patch);
				await this.clearCache();
				return result;
			},
			async e => {
				throw new ClientError(e.message, 409);
			}
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async $patch(patch: UndefinableOptional<InferSource.Create<TSource>> & IWithIdentity): Promise<InferSource.Entity<TSource>> {
		throw new Error(`Source [${this.name}] does not support item patching.`);
	}

	async import(create: InferSource.Create<TSource>): Promise<InferSource.Entity<TSource>> {
		return onUnique(
			() => this.$create(create),
			async () => {
				return this.$patch({
					id: (await this.resolveId(create)).id,
					...create,
				});
			}
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async backup(entity: InferSource.Entity<TSource>): Promise<InferSource.Backup<TSource> | undefined> {
		return entity;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async restore(backup?: InferSource.Backup<TSource>): Promise<InferSource.Entity<TSource> | undefined> {
		throw new Error(`Source [${this.name}] does not support restoring backups.`);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async resolveId(source: InferSource.Create<TSource>): Promise<IWithIdentity> {
		throw new Error(`Source [${this.name}] does not support mapping Create object to an ID.`);
	}

	async remove(ids: string[]): Promise<InferSource.Entity<TSource>[]> {
		const result = await this.$remove(ids);
		await this.clearCache();
		return result;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async $remove(ids: string[]): Promise<InferSource.Entity<TSource>[]> {
		throw new Error(`Source [${this.name}] does not support item deletion.`);
	}

	async get(id: string): Promise<InferSource.Entity<TSource>> {
		return this.$get(id);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async $get(id: string): Promise<InferSource.Entity<TSource>> {
		throw new Error(`Source [${this.name}] does not support getting an item by an id.`);
	}

	async fetch(query: InferSource.Query<TSource>): Promise<InferSource.Entity<TSource> | null> {
		try {
			return await this.find(query);
		} catch (e) {
			console.warn(e);
			return null;
		}
	}

	async find(query: InferSource.Query<TSource>): Promise<InferSource.Entity<TSource>> {
		return this.$find(query);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async $find(query: InferSource.Query<TSource>): Promise<InferSource.Entity<TSource>> {
		throw new Error(`Source [${this.name}] does not support finding an item by a query.`);
	}

	async query(query: InferSource.Query<TSource>): Promise<InferSource.Entity<TSource>[]> {
		const hash = this.hashOf(query, "query");
		if (this.cache?.query && !this.cache?.query?.has(hash)) {
			this.cache?.query?.set(hash, await this.$query(query));
		}
		return this.cache?.query?.get(hash) || this.$query(query);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async $query(query: InferSource.Query<TSource>): Promise<InferSource.Entity<TSource>[]> {
		throw new Error(`Source [${this.name}] does not support querying items.`);
	}

	async count(query: InferSource.Query<TSource>): Promise<number> {
		const hash = this.hashOf(query, "count");
		if (this.cache?.count && !this.cache?.count?.has(hash)) {
			this.cache?.count?.set(hash, await this.$count(query));
		}
		return this.cache?.count?.get(hash) || this.$count(query);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async $count(query: InferSource.Query<TSource>): Promise<number> {
		throw new Error(`Source [${this.name}] does not support counting items by a query.`);
	}

	withFilter({filter}: InferSource.Query<TSource>): InferQuery.Filter<InferSource.Query<TSource>> | undefined {
		return filter;
	}

	hashOf(query: InferSource.Query<TSource>, type?: string): string {
		return crypto.createHash("sha256").update(JSON.stringify({
			query,
			type,
			userId: this.container.user.optional(),
		})).digest("hex");
	}

	async clearCache(): Promise<any> {
		this.cache?.query?.clear();
		this.cache?.count?.clear();
		await this.$clearCache();
	}

	async $clearCache(): Promise<any> {
		// noop
	}

	async truncate(): Promise<void> {
		await this.$truncate();
		await this.clearCache();
	}

	async $truncate(): Promise<void> {
		// noop
	}

	abstract toItem(source: InferSource.Entity<TSource>): Promise<InferSource.Item<TSource>>;
}
