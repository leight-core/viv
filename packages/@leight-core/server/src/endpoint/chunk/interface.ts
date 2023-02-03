import {IQueryParams} from "@leight-core/api";

export interface IChunkEndpointQuery extends IQueryParams {
	chunkId: string;
}
