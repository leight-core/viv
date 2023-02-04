import {IFileSourceConfig} from "./IFileSourceConfig";

export interface IFileServiceStoreProps {
    name: string;
    file?: string;
    path: string;
    mime?: string;
    replace?: boolean;
    userId?: string;
}

export interface IFileService {
    /**
     * Returns native (physical location) path of the given fileId.
     */
    pathOf(fileId: string): string;

    fetch(fileId: string): Promise<IFileSourceConfig['Entity']>;

    store(props: IFileServiceStoreProps): Promise<IFileSourceConfig['Entity']>;
}

export const $FileService = Symbol.for("@leight/file-server/FileService");
