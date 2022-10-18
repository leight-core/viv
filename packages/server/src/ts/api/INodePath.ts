import ts from "typescript";

export type INodePath = {
    readonly path: string;
    readonly node: ts.Node;
};
