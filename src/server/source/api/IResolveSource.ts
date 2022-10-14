import {IWithIdentity} from "@leight-core/viv";

export interface IResolveSource<//
    TSource extends Record<string, string>,
    TResult extends IWithIdentity = IWithIdentity,
    > {
    /**
     * Resolve ID based on request (for example duplication detection).
     *
     * This should return an ID or throw an exception.
     */
    resolveId(source: TSource): Promise<TResult>;
}

export namespace ResolveSource {
    export type Source<T> = T extends IResolveSource<infer U, any> ? U : T;
    export type Result<T> = T extends IResolveSource<any, infer U> ? U : T;
}
