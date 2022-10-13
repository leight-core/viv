import {IChunkServiceFactory} from "@leight-core/viv";
import {
    outputFileSync,
    removeSync
}                             from "fs-extra";

export const ChunkService: IChunkServiceFactory = ({config = {path: ".data/chunk/{chunkId}"}, fileService}) => {
    const toFile = (chunkId: string) => config.path.replace("{chunkId}", chunkId.split("-").join("/"));

    return {
        toFile,
        chunk:  async (chunkId, chunk) => outputFileSync(toFile(chunkId), await chunk, {flag: "a"}),
        commit: (chunkId, commit) => {
            const path = toFile(chunkId);
            const file = fileService.store({
                file: path,
                ...commit,
            });
            removeSync(path);
            return file;
        },
    };
};
