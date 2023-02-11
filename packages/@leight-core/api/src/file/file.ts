import {type IContainer} from "../container";
import {
	type IQuery,
	type ISource
}                        from "../source";

export interface IFileInfo {
	readonly mime: string;
	readonly size: number;
	readonly path: string;
	readonly name: string;
	readonly location: string;
}

export interface IFile extends IFileInfo {
	readonly id: string;
	readonly created: string;
	readonly updated?: string;
	readonly ttl?: number;
}

export interface IFileCreate extends IFile {
}

export interface IFileServiceConfig {
	readonly path: string;
	readonly defaultMimeType?: string;
}

export interface IIFileServiceDeps {
	readonly config?: IFileServiceConfig;
}

export interface IFileStoreRequest {
	/**
	 * File to store (absolute path); the source file will not be touched.
	 */
	readonly file?: string;
	/**
	 * Virtual path of the stored file.
	 */
	readonly path: string;
	/**
	 * Virtual filename (with optional extension).
	 */
	readonly name: string,
	/**
	 * If the file exists, should be replaced? If yes, original metadata should **not** be removed (e.g. database row), just updated.
	 */
	readonly replace: boolean;
}

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

export interface IFileSource<//
	TFileEntity extends Record<string, any>,
	TFileQuery extends IQuery,
> extends ISource<
	IContainer,
	TFileEntity,
	IFile,
	TFileQuery,
	IFileCreate> {
	store(store: IFileStoreRequest): Promise<TFileEntity>;

	refresh(fileId: string): Promise<TFileEntity>;
}

export type IFileServiceFactory = (deps: IIFileServiceDeps) => IFileService;
