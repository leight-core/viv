import {
    IContainer,
    IContainerCallback,
    IFileSource
} from "@leight/server";

export interface IServiceContainer<//
    TFileSource extends IFileSource<IContainer, any, any> = IFileSource<IContainer, any, any>,
    > extends IContainer {
    useFileSource<T>(callback: IContainerCallback<TFileSource, T>): Promise<T>;

    useNodeFs<T>(callback: IContainerCallback<typeof import("node:fs"), T>): Promise<T>;

    useNodeOs<T>(callback: IContainerCallback<typeof import("node:os"), T>): Promise<T>;

    useNodePath<T>(callback: IContainerCallback<typeof import("node:path"), T>): Promise<T>;
}
