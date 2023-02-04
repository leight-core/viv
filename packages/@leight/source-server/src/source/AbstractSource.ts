import "reflect-metadata"
import {type IEntity, type ISource, SourceError} from '@leight/source';
import {type IQuery} from "@leight/query";
import {type IToString} from "@leight/utils";

/**
 * Some base stuff of the source.
 */
export abstract class AbstractSource<TEntity extends IEntity, TQuery extends IQuery<any, any, any>> implements ISource<TEntity, TQuery> {
    protected name: string;

    protected constructor(
        name: string | IToString,
    ) {
        this.name = name.toString();
    }

    async count(query?: TQuery): Promise<number> {
        return this.runCount(query);
    }

    async query(query?: TQuery): Promise<TEntity[]> {
        return this.runQuery(query);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runCount(query?: TQuery): Promise<number> {
        throw new SourceError(`Source [${this.name}] does not support counting items by a query.`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runQuery(query?: TQuery): Promise<TEntity[]> {
        throw new SourceError(`Source [${this.name}] does not support querying items.`);
    }
}
