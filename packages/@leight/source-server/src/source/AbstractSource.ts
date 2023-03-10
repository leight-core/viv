import {
    type ISource,
    type ISourceName,
    type ISourceSchema,
    SourceError
} from "@leight/source";

/**
 * Some base stuff of the source.
 */
export abstract class AbstractSource<TSourceSchema extends ISourceSchema<any>> implements ISource<TSourceSchema> {
    protected constructor(
        protected name: ISourceName,
    ) {
    }

    async count(query?: TSourceSchema["Query"]): Promise<number> {
        return this.runCount(query);
    }

    async query(query?: TSourceSchema["Query"]): Promise<TSourceSchema["Entity"][]> {
        return this.runQuery(query);
    }

    find(id: string): Promise<TSourceSchema["Entity"]> {
        return this.runFind(id);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runCount(query?: TSourceSchema["Query"]): Promise<number> {
        throw new SourceError(`Source [${this.name}] does not support counting items by a query.`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runQuery(query?: TSourceSchema["Query"]): Promise<TSourceSchema["Entity"][]> {
        throw new SourceError(`Source [${this.name}] does not support querying items.`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runFind(id: string): Promise<TSourceSchema["Entity"][]> {
        throw new SourceError(`Source [${this.name}] does not support querying item by an ID.`);
    }
}
