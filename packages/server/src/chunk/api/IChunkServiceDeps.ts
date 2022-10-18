import {
    IChunkServiceConfig,
    IFileService
} from "@leight/server";

export interface IChunkServiceDeps {
    readonly config?: IChunkServiceConfig;
    readonly fileService: IFileService;
}
