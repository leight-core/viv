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
