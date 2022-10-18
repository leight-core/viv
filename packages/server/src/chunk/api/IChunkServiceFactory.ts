import {
    IChunkService,
    IChunkServiceDeps
} from "@leight/server";

export type IChunkServiceFactory = (deps: IChunkServiceDeps) => IChunkService;
