import {IForeachNodeCallback, INode, INodePath} from "@leight-core/api";
import micromatch from "micromatch";
import ts from "typescript";

export function toNode(node: ts.Node, sourceFile: ts.SourceFile): INode {
	return {
		node,
		sourceFile,
		syntaxKind: ts.SyntaxKind[node.kind],
		source: node.getText(sourceFile),
	};
}

export function toNodePaths(root: ts.Node, sourceFile: ts.SourceFile, path: string[] = []): INodePath[] {
	const _root = toNode(root, sourceFile);
	const paths = [
		{
			path: [...path, _root.syntaxKind].join("/"),
			node: root,
		}
	];
	root.getChildren(sourceFile).forEach(node => paths.push(...toNodePaths(node, sourceFile, [...path, _root.syntaxKind])));
	return paths;
}


export function foreachNode(node: ts.Node, sourceFile: ts.SourceFile, callback: IForeachNodeCallback) {
	node.forEachChild(node => callback(toNode(node, sourceFile)));
}

export function pickNodes(path: string[], root: ts.Node, sourceFile: ts.SourceFile): ts.Node[] {
	const request = ["*", ...path].join("/");
	return toNodePaths(root, sourceFile).filter(node => micromatch.isMatch(node.path, request)).map(node => node.node);
}

export function pickNode(path: string[], root: ts.Node, sourceFile: ts.SourceFile): ts.Node | undefined {
	return pickNodes(path, root, sourceFile)?.[0];
}

export function requireNode(path: string[], root: ts.Node, sourceFile: ts.SourceFile): ts.Node {
	return pickNode(path, root, sourceFile) || (() => {
		const node = toNode(root, sourceFile);
		throw new Error(`Cannot find node by path [${path}] in root [${node.source}].`);
	})();
}

export function toPrintNode(node: ts.Node, sourceFile: ts.SourceFile, indentLevel = 0) {
	const indentation = "    ".repeat(indentLevel);
	const _node = toNode(node, sourceFile);
	console.log(`${indentation}${_node.syntaxKind}: ${_node.source}`);
	node.getChildren(sourceFile).forEach(child => toPrintNode(child, sourceFile, indentLevel + 1));
}
