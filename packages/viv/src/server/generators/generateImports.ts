import {IImportReflection} from "@leight/viv";

export const generateImports = (imports: IImportReflection[]): string => {
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
