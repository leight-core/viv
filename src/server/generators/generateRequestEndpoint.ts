import {ISdk} from "@leight-core/api";
import {
	cleanup,
	generateImports,
	toGeneratorCommons
}             from "@leight-core/server";

export function generateRequestEndpoint(sdk: ISdk): string {
	const generatorCommons = toGeneratorCommons(sdk);

	sdk.imports.push(...[
		{
			imports: [
				"createQueryHook",
				"createPromiseHook",
				"createPromise",
				"toLink",
			],
			from:    "\"@leight-core/client\"",
		},
	]);

	const queryParams = `I${generatorCommons.name}QueryParams`;
	const name        = generatorCommons.name;
	const request     = generatorCommons.generics[0];
	const response    = generatorCommons.generics[1];

	// language=text
	return cleanup(`
/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */
 
${generateImports(sdk.imports)}

${sdk.interfaces.map(item => item.source).join("\n")}

export const ${name}ApiLink = "${generatorCommons.api}";

export type ${queryParams} = ${generatorCommons.generics[4] ?? "any"};

export const use${name}Query = createQueryHook<${request}, ${response}, ${queryParams}>(${name}ApiLink, "post");

export const to${name}Link = (queryParams?: ${queryParams}) => toLink(${name}ApiLink, queryParams);
export const use${name}Link = () => to${name}Link;

export const use${name}Promise = createPromiseHook<${request}, ${response}, ${queryParams}>(${name}ApiLink, "post");
export const ${name}Promise = createPromise<${request}, ${response}, ${queryParams}>(${name}ApiLink, "post");
`);
}
