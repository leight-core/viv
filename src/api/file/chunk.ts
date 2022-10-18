import {
    IContainer,
    IEndpointRequest,
    IFile,
    IFileService,
    IQueryParams
} from "@leight/viv";

export interface IChunkCommit {
    readonly path: string;
    readonly name: string,
    readonly replace: boolean;
}

export interface IChunkServiceConfig {
    readonly path: string;
}

export interface IChunkServiceDeps {
    readonly config?: IChunkServiceConfig;
    readonly fileService: IFileService;
}

export interface IChunkService {
    toFile(chunkId: string): string;

    chunk(chunkId: string, chunk: Promise<Buffer>): Promise<void>;

    commit(chunkId: string, commit: IChunkCommit): IFile;
}

export type IChunkServiceFactory = (deps: IChunkServiceDeps) => IChunkService;

export type IChunkCommitEvent = <//
    TContainer extends IContainer,
    TRequest,
    TResponse,
    TQuery extends IQueryParams = any,
    >(file: IFile, params: IEndpointRequest<TContainer, TRequest, TResponse, TQuery>) => Promise<IFile>;
