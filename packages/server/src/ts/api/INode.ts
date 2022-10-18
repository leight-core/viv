import ts from "typescript";

export interface INode {
    readonly node: ts.Node;
    readonly sourceFile: ts.SourceFile;
    readonly syntaxKind: string;
    readonly source: string;
}
