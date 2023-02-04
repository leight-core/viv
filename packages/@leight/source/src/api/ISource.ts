import {type ISourceConfig} from "./ISourceConfig";

/**
 * Implementation of data source (general, not just a database one).
 */
export interface ISource<TSourceConfig extends ISourceConfig> {
    /**
     * Count items based on an optional query.
     */
    count(query?: TSourceConfig['Query']): Promise<number>;

    /**
     * Query items.
     */
    query(query?: TSourceConfig['Query']): Promise<TSourceConfig['Entity'][]>;
}
