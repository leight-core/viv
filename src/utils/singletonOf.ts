/**
 * Ensures single call of the given func (extremely simple memoize); works just in the current scope (like function or so), there
 * is no global tracking of memoized stuff.
 */
export const singletonOf = <T>(func: () => T): () => T => {
    let $instance: T | undefined;
    return () => $instance || ($instance = func());
};
