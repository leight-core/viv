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

    async create(entity: TSourceSchema["Entity"]): Promise<TSourceSchema["Entity"]> {
        return this.runCreate(entity);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runCreate(entity: TSourceSchema["Entity"]): Promise<TSourceSchema["Entity"]> {
        throw new SourceError(`Source [${this.name}] does not support creating items.`);
    }

    async count(query?: TSourceSchema["Query"]): Promise<number> {
        return this.runCount(query);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runCount(query?: TSourceSchema["Query"]): Promise<number> {
        throw new SourceError(`Source [${this.name}] does not support counting items by a query.`);
    }

    async query(query?: TSourceSchema["Query"]): Promise<TSourceSchema["Entity"][]> {
        return this.runQuery(query);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runQuery(query?: TSourceSchema["Query"]): Promise<TSourceSchema["Entity"][]> {
        throw new SourceError(`Source [${this.name}] does not support querying items.`);
    }

    find(id: string): Promise<TSourceSchema["Entity"]> {
        return this.runFind(id);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async runFind(id: string): Promise<TSourceSchema["Entity"]> {
        throw new SourceError(`Source [${this.name}] does not support querying item by an ID.`);
    }
}
