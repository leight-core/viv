import {type ISource, type ISourceConfig, type ISourceName, SourceError} from '@leight/source';

/**
 * Some base stuff of the source.
 */
export abstract class AbstractSource<TSourceConfig extends ISourceConfig> implements ISource<TSourceConfig> {
    protected name: string;

    protected constructor(
        name: ISourceName,
    ) {
        this.name = name.toString();
    }

    async count(query?: TSourceConfig['Query']): Promise<number> {
        return this.runCount(query);
    }

    async query(query?: TSourceConfig['Query']): Promise<TSourceConfig['Entity'][]> {
        return this.runQuery(query);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runCount(query?: TSourceConfig['Query']): Promise<number> {
        throw new SourceError(`Source [${this.name}] does not support counting items by a query.`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runQuery(query?: TSourceConfig['Query']): Promise<TSourceConfig['Entity'][]> {
        throw new SourceError(`Source [${this.name}] does not support querying items.`);
    }
}
