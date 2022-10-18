import {ISdk} from "@leight/server";
import {
    cleanup,
    generateImports,
    toGeneratorCommons
}             from "./utils";

export function generateDeleteEndpoint(sdk: ISdk): string {
    const generatorCommons = toGeneratorCommons(sdk);

    sdk.imports.push(...[
        {imports: ["FC"], from: "\"react\""},
        {
            imports: [
                "SourceInfer",
            ],
            from:    "\"@leight/viv\""
        },
        {
            imports: [
                "createPromiseHook",
                "createPromise",
                "toLink",
                "createMutationHook",
            ],
            from:    "\"@leight/viv\"",
        },
    ]);

    const name        = generatorCommons.name;
    const source      = generatorCommons.generics[0];
    const queryParams = `I${name}QueryParams`;

    // language=text
    return cleanup(`
/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

${generateImports(sdk.imports)}

${sdk.interfaces.map(item => item.source).join("\n")}

export const ${name}ApiLink = "${generatorCommons.api}";

export type ${queryParams} = ${generatorCommons.generics[2] || "any"};

export const use${name}Mutation = createMutationHook<string[], SourceInfer.Item<${source}>, ${queryParams}>(${name}ApiLink, "post");

export const to${name}Link = (queryParams?: ${queryParams}) => toLink(${name}ApiLink, queryParams);
export const use${name}Link = () => to${name}Link;

export const use${name}Promise = createPromiseHook<string[], SourceInfer.Item<${source}>, ${queryParams}>(${name}ApiLink, "post");

export const ${name}Promise = createPromise<string[], SourceInfer.Item<${source}>, ${queryParams}>(${name}ApiLink, "post");
`);
}
