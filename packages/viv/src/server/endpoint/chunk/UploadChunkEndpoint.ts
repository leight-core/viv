import {
    IChunkEndpointQuery,
    IChunkService,
    IContainer,
    IEndpointHandler,
} from "@leight/viv";

export interface IUploadChunkEndpointRequest<TContainer extends IContainer> {
    chunkService: IChunkService;
    acl?: string[];
    container: () => Promise<TContainer>;
}

export const UploadChunkEndpoint: <TContainer extends IContainer>(request: IUploadChunkEndpointRequest<TContainer>) => IEndpointHandler<TContainer, string, void, IChunkEndpointQuery> = ({chunkService, acl, container}) => ({
    name:    "Upload",
    container,
    acl,
    handler: async ({res, query: {chunkId}, toBody}) => {
        await chunkService.chunk(chunkId, toBody());
        res.status(200).end();
    },
});
