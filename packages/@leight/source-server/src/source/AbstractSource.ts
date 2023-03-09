import {type IDrizzle} from "@leight/drizzle";
import {
    type Interface,
    type ISourceConfig,
    SourceError
}                      from "@leight/source";

/**
 * Some base stuff of the source.
 */
export abstract class AbstractSource<TSourceConfig extends ISourceConfig<any, any>> implements Interface<TSourceConfig> {
    protected constructor(
        protected drizzle: IDrizzle,
        protected config: TSourceConfig,
        protected name = config.Schema.$name,
    ) {
    }

    async count(query?: TSourceConfig["Query"]): Promise<number> {
        return this.runCount(query);
    }

    async query(query?: TSourceConfig["Query"]): Promise<TSourceConfig["Entity"][]> {
        return this.runQuery(query);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runCount(query?: TSourceConfig["Query"]): Promise<number> {
        // return this.drizzle.select({count: sql<number>`count(${this.config.Schema.id})`}).from(this.config.Schema)
        throw new SourceError(`Source [${this.name}] does not support counting items by a query.`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runQuery(query?: TSourceConfig["Query"]): Promise<TSourceConfig["Entity"][]> {
        throw new SourceError(`Source [${this.name}] does not support querying items.`);
    }
}
