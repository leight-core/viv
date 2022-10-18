import {IFileInfo} from "@leight/shared";

export interface IFile extends IFileInfo {
    readonly id: string;
    readonly created: string;
    readonly updated?: string;
    readonly ttl?: number;
}
