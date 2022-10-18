import {
    IFileService,
    IFileServiceDeps
} from "@leight/server";

export type IFileServiceFactory = (deps: IFileServiceDeps) => IFileService;
