import {
	type IChunkCommit,
	type IChunkCommitEvent,
	type IChunkService,
	type IContainer,
	type IEndpoint,
	type IFile
} from "@leight-core/api";
import {type IChunkEndpointQuery} from "./interface";

export interface ICommitChunkEndpointRequest {
	chunkService: IChunkService;
	chunkCommitEvent: IChunkCommitEvent;
	acl?: string[];
	container: () => Promise<IContainer>;
}

export const CommitChunkEndpoint: (request: ICommitChunkEndpointRequest) => IEndpoint<"Commit", IChunkCommit, IFile, IChunkEndpointQuery> = (
	{
		chunkService,
		chunkCommitEvent,
		acl,
		container
	}) => ({
	container,
	handler: async params => {
		return chunkCommitEvent(chunkService.commit(params.query.chunkId, params.req.body), params);
	},
	acl,
});
