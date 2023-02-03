import type ts from "typescript";

export interface INode {
	readonly node: ts.Node;
	readonly sourceFile: ts.SourceFile;
	readonly syntaxKind: string;
	readonly source: string;
}

export type INodePath = {
	readonly path: string;
	readonly node: ts.Node;
};

export type IForeachNodeCallback = (node: INode) => void;
