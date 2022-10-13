export interface IImportReflection {
	readonly imports: string[];
	readonly from: string;
}

export interface IInterfaceReflection {
	readonly name: string;
	readonly source: string;
}

export interface IEndpointReflection {
	readonly name: string;
	readonly type: string;
	readonly api: string;
	readonly generics: string[];
}

export interface ISdk {
	readonly file: string;
	readonly imports: IImportReflection[];
	readonly interfaces: IInterfaceReflection[];
	readonly endpoint: IEndpointReflection;
}

export type IGenerator = (sdk: ISdk) => string;

export interface IGenerators {
	[index: string]: IGenerator;
}
