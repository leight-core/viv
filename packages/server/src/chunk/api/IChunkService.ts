import {
    IChunkCommit,
    IFile
} from "@leight/shared";

export interface IChunkService {
    toFile(chunkId: string): string;

    chunk(chunkId: string, chunk: Promise<Buffer>): Promise<void>;

    commit(chunkId: string, commit: IChunkCommit): IFile;
}
