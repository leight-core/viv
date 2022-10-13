import {
	IChunkCommit,
	IChunkCommitEvent,
	IChunkService,
	IContainer,
	IEndpointHandler,
	IFile
}                            from "@leight-core/api";
import {IChunkEndpointQuery} from "@leight-core/server";

export interface ICommitChunkEndpointRequest<TContainer extends IContainer> {
	chunkService: IChunkService;
	chunkCommitEvent: IChunkCommitEvent;
	acl?: string[];
	container: () => Promise<TContainer>;
}

export const CommitChunkEndpoint: <TContainer extends IContainer>(request: ICommitChunkEndpointRequest<TContainer>) => IEndpointHandler<TContainer, IChunkCommit, IFile, IChunkEndpointQuery> = (
	{
		chunkService,
		chunkCommitEvent,
		acl,
		container
	}) => ({
	name:    "Commit",
	container,
	acl,
	handler: async params => chunkCommitEvent(chunkService.commit(params.query.chunkId, params.req.body), params),
});
