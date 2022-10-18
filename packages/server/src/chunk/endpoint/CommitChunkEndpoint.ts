import {
    IChunkCommitEvent,
    IChunkEndpointQuery,
    IChunkService,
    IContainer,
    IEndpointHandler
} from "@leight/server";
import {
    IChunkCommit,
    IFile
} from "@leight/shared";

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
