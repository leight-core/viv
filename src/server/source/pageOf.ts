import {IQuery} from "@leight-core/api";

export const pageOf = (query: IQuery) => ({
	take: query.size,
	skip: query.page && query.size && query.page * query.size,
});
