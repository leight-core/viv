import {IImportReflection} from "@leight-core/api";

export const generateImports = (imports: IImportReflection[]): string => {
	const $imports: { [index: string]: string[] } = {};

	imports.forEach(_import => ($imports[_import.from] = $imports[_import.from] || []).push(..._import.imports));
	for (const [k, v] of Object.entries($imports)) {
		$imports[k] = v.filter((value, index, self) => self.indexOf(value) === index).sort();
	}

	console.log("Imports", Object.keys($imports).sort().reduce((obj: any, key: string) => {
		return {...obj, [key]: $imports[key]};
	}, {}));

	return Object.entries($imports).filter(([, imports]) => imports.length).map(([_import, imports]) => `import {${imports.join(", ")}} from ${_import};`).join("\n");
};
