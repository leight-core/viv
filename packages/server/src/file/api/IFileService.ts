import {IFileStoreRequest} from "@leight/server";
import {
    IFile,
    IFileInfo
}                          from "@leight/shared";

export interface IFileService {
    /**
     * Detect mime of the given file.
     */
    mimeOf(file?: string): string;

    /**
     * Return file size of the given file.
     */
    sizeOf(file?: string): number;

    infoOf(file: string): IFileInfo;

    /**
     * Generates (absolute) file path based on the file id.
     */
    toLocation(fileId: string): string;

    store(store: IFileStoreRequest): IFile;
}
