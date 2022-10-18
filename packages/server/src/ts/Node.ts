import {
    IForeachNodeCallback,
    INode,
    INodePath
}                 from "@leight/server";
import micromatch from "micromatch";
import ts         from "typescript";

export class Node {
    static toNode(node: ts.Node, sourceFile: ts.SourceFile): INode {
        return {
            node,
            sourceFile,
            syntaxKind: ts.SyntaxKind[node.kind],
            source:     node.getText(sourceFile),
        };
    }

    static toNodePaths(root: ts.Node, sourceFile: ts.SourceFile, path: string[] = []): INodePath[] {
        const _root = this.toNode(root, sourceFile);
        const paths = [
            {
                path: [
                          ...path,
                          _root.syntaxKind
                      ].join("/"),
                node: root,
            }
        ];
        root.getChildren(sourceFile).forEach(node => paths.push(...this.toNodePaths(node, sourceFile, [
            ...path,
            _root.syntaxKind
        ])));
        return paths;
    }

    static forEach(node: ts.Node, sourceFile: ts.SourceFile, callback: IForeachNodeCallback) {
        node.forEachChild(node => callback(this.toNode(node, sourceFile)));
    }

    static nodes(path: string[], root: ts.Node, sourceFile: ts.SourceFile): ts.Node[] {
        const request = [
            "*",
            ...path
        ].join("/");
        return this.toNodePaths(root, sourceFile).filter(node => micromatch.isMatch(node.path, request)).map(node => node.node);
    }

    static node(path: string[], root: ts.Node, sourceFile: ts.SourceFile): ts.Node | undefined {
        return this.nodes(path, root, sourceFile)?.[0];
    }

    static require(path: string[], root: ts.Node, sourceFile: ts.SourceFile): ts.Node {
        return this.node(path, root, sourceFile) || (() => {
            const node = this.toNode(root, sourceFile);
            throw new Error(`Cannot find node by path [${path}] in root [${node.source}].`);
        })();
    }

    static print(node: ts.Node, sourceFile: ts.SourceFile, indentLevel = 0) {
        const indentation = "    ".repeat(indentLevel);
        const _node       = this.toNode(node, sourceFile);
        console.log(`${indentation}${_node.syntaxKind}: ${_node.source}`);
        node.getChildren(sourceFile).forEach(child => this.print(child, sourceFile, indentLevel + 1));
    }
}
