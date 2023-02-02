import "reflect-metadata"
import {type IEntity, type ISource, SourceError} from '@leight/source';
import {type IQuery} from "@leight/query";

/**
 * Some base stuff of the source.
 */
export abstract class AbstractSource<TEntity extends IEntity, TQuery extends IQuery<any, any, any>> implements ISource<TEntity, TQuery> {
    protected constructor(
        protected name: string,
    ) {
    }

    async count(query?: TQuery): Promise<number> {
        return this.runCount(query);
    }

    async query(query: TQuery): Promise<TEntity[]> {
        return this.runQuery(query);
    }

    async runCount(query?: TQuery): Promise<number> {
        throw new SourceError(`Source [${this.name}] does not support counting items by a query.`);
    }

    async runQuery(query: TQuery): Promise<TEntity[]> {
        throw new SourceError(`Source [${this.name}] does not support querying items.`);
    }
}
