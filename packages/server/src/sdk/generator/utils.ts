import {
    ISdk,
    ISdkImportReflection
} from "@leight/server";

export interface IGeneratorCommons {
    name: string;
    api: string;
    generics: string[];
}

export const toGeneratorCommons = (sdk: ISdk): IGeneratorCommons => {
    return {
        name:     sdk.endpoint.name.replace("Endpoint", ""),
        api:      sdk.endpoint.api,
        generics: sdk.endpoint.generics,
    };
};

export const generateImports = (imports: ISdkImportReflection[]): string => {
    const _imports: { [index: string]: string[] } = {};

    imports.forEach(_import => (_imports[_import.from] = _imports[_import.from] || []).push(..._import.imports));
    for (const [k, v] of Object.entries(_imports)) {
        _imports[k] = v.filter((value, index, self) => self.indexOf(value) === index).sort();
    }

    console.log("Imports", Object.keys(_imports).sort().reduce((obj: any, key: string) => {
        obj[key] = _imports[key];
        return obj;
    }, {}));

    return Object.entries(_imports).filter(([, imports]) => imports.length).map(([_import, imports]) => `import {${imports.join(", ")}} from ${_import};`).join("\n");
};

export const cleanup = (code: string) => code.replace(/\n\s*\n\s*\n/g, "\n\n").trim() + "\n";
