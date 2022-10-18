import {
    IContainer,
    IFileCreate,
    IFileStoreRequest,
    ISource
} from "@leight/server";
import {
    IEntity,
    IFile,
    IQuery
} from "@leight/shared";

export interface IFileSource<//
    TContainer extends IContainer,
    TFileEntity extends IEntity,
    TFileQuery extends IQuery,
    > extends ISource<//
    TContainer,
    TFileEntity,
    IFile,
    TFileQuery,
    IFileCreate> {
    store(store: IFileStoreRequest): Promise<TFileEntity>;

    refresh(fileId: string): Promise<TFileEntity>;
}
