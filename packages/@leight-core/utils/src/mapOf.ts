export const mapOf = async <T, R, U>(source: Promise<T[]>, map: (item: T) => R, mapper: (item: R) => Promise<U>): Promise<U[]> => Promise.all((await source).map(async item => mapper(map(item))));
