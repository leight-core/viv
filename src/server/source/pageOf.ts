import {IQuery} from "@leight/viv";

/**
 * @TODO improve api of this
 * @param query
 */
export const pageOf = (query: IQuery) => ({
    take: query.size,
    skip: query.page && query.size && query.page * query.size,
});
