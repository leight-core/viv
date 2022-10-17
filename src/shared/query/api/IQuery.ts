export interface IQuery<//
    TFilter extends Record<string, any> = any,
    TOrderBy extends Record<string, any> = any,
    TParams extends Record<string, any> = any,
    //
    > {
    /** currently requested page */
    readonly page?: number;
    /** limit number of items per page */
    readonly size?: number;
    /**
     * support for exact item filtering (like by an id or name or whatever)
     */
    readonly filter?: TFilter;
    /**
     *  support for ordering items
     */
    readonly orderBy?: TOrderBy;
    /**
     * support for edge case query parameters which do not fit into filter nor orderBy.
     */
    readonly params?: TParams;
}

export namespace InferQuery {
    export type Filter<T> = T extends IQuery<infer U> ? U : T;
    export type OrderBy<T> = T extends IQuery<any, infer U> ? U : T;
    export type Params<T> = T extends IQuery<any, any, infer U> ? U : T;
}
