import {type IEndpointParams} from "../endpoint";
import {type IQueryParams}    from "../link";
import {
	type IFile,
	type IFileService
}                             from "./file";

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

export type IChunkCommitEvent = <
	TRequest,
	TResponse,
	TQuery extends IQueryParams = any,
>(file: IFile, params: IEndpointParams<TRequest, TResponse, TQuery>) => Promise<IFile>;
