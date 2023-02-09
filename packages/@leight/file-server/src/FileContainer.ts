import {type IContainer} from "@leight/container";
import {
    $ChunkService,
    $ChunkServiceConfig,
    $FileService,
    $FileServiceConfig,
    $FileSource,
    type IChunkService,
    type IChunkServiceConfig,
    type IFileService,
    type IFileServiceConfig,
    type IFileSource,
}                        from "@leight/file";
import "reflect-metadata";
import {
    ChunkService,
    FileService
}                        from "./service";
import {FileSource}      from "./source";

export interface IFileContainer {
    ChunkService: IChunkService;
    ChunkServiceConfig: IChunkServiceConfig;
    FileService: IFileService;
    FileServiceConfig: IFileServiceConfig;
    FileSource: IFileSource;
}

/**
 * Register services of this package into a container and return typed
 * public services.
 */
export const FileContainer = (container: IContainer): IFileContainer => {
    container.register<IChunkService>($ChunkService, {
        useClass: ChunkService,
    });
    container.register<IChunkServiceConfig>($ChunkServiceConfig, {
        useValue: {
            path: ".data/chunk/{chunkId}",
        },
    });
    container.register<IFileService>($FileService, {
        useClass: FileService,
    });
    container.register<IFileServiceConfig>($FileServiceConfig, {
        useValue: {
            path:            ".data/file/{fileId}",
            defaultMimeType: "application/octet-stream",
        },
    });
    container.register<IFileSource>($FileSource, {
        useClass: FileSource,
    });

    return {
        get ChunkService() {
            return container.resolve<IChunkService>($ChunkService);
        },
        get ChunkServiceConfig() {
            return container.resolve<IChunkServiceConfig>($ChunkServiceConfig);
        },
        get FileService() {
            return container.resolve<IFileService>($FileService);
        },
        get FileServiceConfig() {
            return container.resolve<IFileServiceConfig>($FileServiceConfig);
        },
        get FileSource() {
            return container.resolve<IFileSource>($FileSource);
        },
    };
};
