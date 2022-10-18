import {
    IGenerators,
    ISdk,
    ISdkEndpointReflection,
    ISdkImportReflection,
    ISdkInterfaceReflection,
    Node,
    SdkGenerators
}             from "@leight/server";
import {
    outputFile,
    readFileSync,
    remove
}             from "fs-extra";
import {glob} from "glob";
import ts     from "typescript";

export class Sdk {
    static isExport(node: ts.Node, sourceFile: ts.SourceFile): boolean {
        return !!Node.node([
            "SyntaxList",
            "ExportKeyword"
        ], node, sourceFile);
    }

    static exportImport(node: ts.Node, sourceFile: ts.SourceFile): ISdkImportReflection | false {
        const imports = Node.nodes([
            "ImportClause",
            "NamedImports",
            "**",
            "Identifier"
        ], node, sourceFile).map(node => Node.toNode(node, sourceFile).source);
        const _from   = Node.node(["StringLiteral"], node, sourceFile);
        const from    = _from && Node.toNode(_from, sourceFile).source;
        return from ? {
            imports,
            from,
        } : false;
    }

    static exportInterface(node: ts.Node, sourceFile: ts.SourceFile): ISdkInterfaceReflection | false {
        const source     = node.getText(sourceFile);
        const withExport = this.isExport(node, sourceFile);
        const name       = Node.toNode(Node.require(["Identifier"], node, sourceFile), sourceFile);
        console.info(`=== Export interface (${withExport}) ===\n${source}\n`);
        return withExport && {
            source,
            name: name.source,
        };
    }

    static exportEndpoint(node: ts.Node, sourceFile: ts.SourceFile, generators: IGenerators): ISdkEndpointReflection | false {
        const api = ("/" + sourceFile.fileName.replace("src/", "").replace("pages/", "").replace(".ts", "")).replace("//", "/");

        console.info(`=== Checking Endpoint Node ===`);

        const typeRoot = Node.node(["Identifier"], node, sourceFile);
        if (!typeRoot) {
            console.info("- endpoint type not found\n");
            return false;
        }

        const genericRoot = Node.node(["SyntaxList"], node, sourceFile);
        if (!genericRoot) {
            console.info("- generics of an endpoint not found (SyntaxList)\n");
            return false;
        }
        const name = Node.node([
            "LiteralType",
            "StringLiteral"
        ], genericRoot, sourceFile);
        if (!name) {
            console.info("- endpoint name not found\n");
            return false;
        }
        const generics = genericRoot.getChildren().filter(node => ts.SyntaxKind[node.kind] !== "CommaToken").slice(1);
        const type     = Node.toNode(typeRoot, sourceFile).source;
        if (!Object.keys(generators).includes(type)) {
            console.info(`- unknown endpoint type [${type}]\n`);
            return false;
        }

        console.info("- success\n");

        return {
            name:     Node.toNode(name, sourceFile).source.replace(/"/ig, ""),
            api,
            type,
            generics: generics.map(node => Node.toNode(node, sourceFile).source),
        };
    }

    static toSdk(endpoint: string, generators: IGenerators): ISdk | undefined {
        const interfaces: (ISdkInterfaceReflection | false)[] = [];
        const imports: (ISdkImportReflection | false)[]       = [];
        const endpoints: (ISdkEndpointReflection | false)[]   = [];
        const root                                            = ts.createSourceFile(endpoint, readFileSync(endpoint, "utf8"), ts.ScriptTarget.Latest);

        console.log(`${"-".repeat(16)} Parsing ${"-".repeat(16)}\n${endpoint}\n--------------------------------`);

        Node.nodes([
            "*",
            "ImportDeclaration"
        ], root, root).forEach(node => imports.push(this.exportImport(node, root)));
        Node.nodes([
            "*",
            "InterfaceDeclaration"
        ], root, root).forEach(node => interfaces.push(this.exportInterface(node, root)));
        Node.nodes([
            "*",
            "ExportAssignment",
            "CallExpression"
        ], root, root).forEach(node => endpoints.push(this.exportEndpoint(node, root, generators)));

        const $endpoint = endpoints.filter(item => item).map<ISdkEndpointReflection>(item => item as ISdkEndpointReflection)?.[0];

        if (!$endpoint) {
            return undefined;
        }

        return {
            file:       root.fileName.replace("/pages", "/sdk").replace(".ts", ".tsx"),
            imports:    imports.filter(Boolean) as ISdkImportReflection[],
            interfaces: interfaces.filter(Boolean) as ISdkInterfaceReflection[],
            endpoint:   $endpoint,
        };
    }

    static toSdks(path: string, generators: IGenerators): ISdk[] {
        return glob.sync(path).map(endpoint => this.toSdk(endpoint, generators)).filter(sdk => sdk) as ISdk[];
    }

    static toSource(sdk: ISdk, generators: IGenerators): string {
        const source: string[] = [];
        source.push(generators[sdk.endpoint.type]?.(sdk) || "");
        return source.join("\n");
    }

    static async sdkOf(path: string, generators?: IGenerators): Promise<string[]> {
        const $generators        = generators || SdkGenerators;
        const exported: string[] = [];
        await remove("src/sdk");
        this.toSdks(path, $generators).forEach(sdk => {
            console.log(`Exporting [${sdk.file}]`, sdk);
            outputFile(sdk.file, this.toSource(sdk, $generators));
            exported.push(sdk.file);
        });
        return exported;
    }
}
