import {
    generateCreateEndpoint,
    generateDeleteEndpoint,
    generateEndpoint,
    generateEntityEndpoint,
    generateFetchEndpoint,
    generateGetEndpoint,
    generateListEndpoint,
    generateMutationEndpoint,
    generatePatchEndpoint,
    generateQueryEndpoint,
    generateRequestEndpoint,
    IEndpointReflection,
    IGenerators,
    IImportReflection,
    IInterfaceReflection,
    ISdk,
    pickNode,
    pickNodes,
    requireNode,
    toNode
}             from "@leight-core/viv";
import {
    outputFile,
    readFileSync,
    remove
}             from "fs-extra";
import {glob} from "glob";
import ts     from "typescript";

const defaultGenerators = {
    "Endpoint":         generateEndpoint,
    "CreateEndpoint":   generateCreateEndpoint,
    "PatchEndpoint":    generatePatchEndpoint,
    "GetEndpoint":      generateGetEndpoint,
    "FetchEndpoint":    generateFetchEndpoint,
    "ListEndpoint":     generateListEndpoint,
    "MutationEndpoint": generateMutationEndpoint,
    "QueryEndpoint":    generateQueryEndpoint,
    "EntityEndpoint":   generateEntityEndpoint,
    "RequestEndpoint":  generateRequestEndpoint,
    "DeleteEndpoint":   generateDeleteEndpoint,
};

export function isExport(node: ts.Node, sourceFile: ts.SourceFile): boolean {
    return !!pickNode([
        "SyntaxList",
        "ExportKeyword"
    ], node, sourceFile);
}

export function exportImport(node: ts.Node, sourceFile: ts.SourceFile): IImportReflection | false {
    const imports = pickNodes([
        "ImportClause",
        "NamedImports",
        "**",
        "Identifier"
    ], node, sourceFile).map(node => toNode(node, sourceFile).source);
    const _from   = pickNode(["StringLiteral"], node, sourceFile);
    const from    = _from && toNode(_from, sourceFile).source;
    return from ? {
        imports,
        from,
    } : false;
}

export function exportInterface(node: ts.Node, sourceFile: ts.SourceFile): IInterfaceReflection | false {
    const source     = node.getText(sourceFile);
    const withExport = isExport(node, sourceFile);
    const name       = toNode(requireNode(["Identifier"], node, sourceFile), sourceFile);
    console.info(`=== Export interface (${withExport}) ===\n${source}\n`);
    return withExport && {
        source,
        name: name.source,
    };
}

export function exportEndpoint(node: ts.Node, sourceFile: ts.SourceFile, generators: IGenerators): IEndpointReflection | false {
    const api = ("/" + sourceFile.fileName.replace("src/", "").replace("pages/", "").replace(".ts", "")).replace("//", "/");

    console.info(`=== Checking Endpoint Node ===`);

    const typeRoot = pickNode(["Identifier"], node, sourceFile);
    if (!typeRoot) {
        console.info("- endpoint type not found\n");
        return false;
    }

    const genericsRoot = pickNode(["SyntaxList"], node, sourceFile);
    if (!genericsRoot) {
        console.info("- generics of an endpoint not found (SyntaxList)\n");
        return false;
    }
    const name = pickNode([
        "LiteralType",
        "StringLiteral"
    ], genericsRoot, sourceFile);
    if (!name) {
        console.info("- endpoint name not found\n");
        return false;
    }
    const generics = genericsRoot.getChildren().filter(node => ts.SyntaxKind[node.kind] !== "CommaToken").slice(1);
    const type     = toNode(typeRoot, sourceFile).source;
    if (!Object.keys(generators).includes(type)) {
        console.info(`- unknown endpoint type [${type}]\n`);
        return false;
    }

    console.info("- success\n");

    return {
        name:     toNode(name, sourceFile).source.replace(/"/ig, ""),
        api,
        type,
        generics: generics.map(node => toNode(node, sourceFile).source),
    };
}

export function toSdk(endpoint: string, generators: IGenerators): ISdk | undefined {
    const interfaces: (IInterfaceReflection | false)[] = [];
    const imports: (IImportReflection | false)[]       = [];
    const endpoints: (IEndpointReflection | false)[]   = [];
    const root                                         = ts.createSourceFile(endpoint, readFileSync(endpoint, "utf8"), ts.ScriptTarget.Latest);

    console.log(`${"-".repeat(16)} Parsing ${"-".repeat(16)}\n${endpoint}\n--------------------------------`);

    pickNodes([
        "*",
        "ImportDeclaration"
    ], root, root).forEach(node => imports.push(exportImport(node, root)));
    pickNodes([
        "*",
        "InterfaceDeclaration"
    ], root, root).forEach(node => interfaces.push(exportInterface(node, root)));
    pickNodes([
        "*",
        "ExportAssignment",
        "CallExpression"
    ], root, root).forEach(node => endpoints.push(exportEndpoint(node, root, generators)));

    const _endpoint = endpoints.filter(item => item).map<IEndpointReflection>(item => item as IEndpointReflection)?.[0];

    if (!_endpoint) {
        return undefined;
    }

    return {
        file:       root.fileName.replace("/pages", "/sdk").replace(".ts", ".tsx"),
        imports:    imports.filter(Boolean) as IImportReflection[],
        interfaces: interfaces.filter(Boolean) as IInterfaceReflection[],
        endpoint:   _endpoint,
    };
}

export function toSdks(path: string, generators: IGenerators): ISdk[] {
    return glob.sync(path).map(endpoint => toSdk(endpoint, generators)).filter(sdk => sdk) as ISdk[];
}

export function toSource(sdk: ISdk, generators: IGenerators): string {
    const source: string[] = [];
    source.push(generators[sdk.endpoint.type]?.(sdk) || "");
    return source.join("\n");
}

export async function generateSdkFor(path: string, generators?: IGenerators): Promise<string[]> {
    const _generators        = generators || defaultGenerators;
    const exported: string[] = [];
    await remove("src/sdk");
    toSdks(path, _generators).forEach(sdk => {
        console.log(`Exporting [${sdk.file}]`, sdk);
        outputFile(sdk.file, toSource(sdk, _generators));
        exported.push(sdk.file);
    });
    return exported;
}
