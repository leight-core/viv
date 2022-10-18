import {ISdk} from "@leight/server";
import {
    cleanup,
    generateImports,
    toGeneratorCommons
}             from "./utils";

export function generatePatchEndpoint(sdk: ISdk): string {
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
                "Form",
                "IFormProps",
                "MobileForm",
                "IMobileFormProps",
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

export const use${name}Mutation = createMutationHook<SourceInfer.Patch<${source}>, SourceInfer.Item<${source}>>(${name}ApiLink, "post");

export interface I${name}DefaultFormProps extends Partial<IFormProps<SourceInfer.Patch<${source}>, SourceInfer.Item<${source}>>> {
}

export const ${name}DefaultForm: FC<I${name}DefaultFormProps> = props => <Form<SourceInfer.Patch<${source}>, SourceInfer.Item<${source}>>
	useMutation={use${name}Mutation}
	translation={${name}ApiLink}
	{...props}
/>

export interface I${name}DefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Patch<${source}>, SourceInfer.Item<${source}>>> {
}

export const ${name}DefaultMobileForm: FC<I${name}DefaultMobileFormProps> = props => <MobileForm<SourceInfer.Patch<${source}>, SourceInfer.Item<${source}>>
	useMutation={use${name}Mutation}
	translation={${name}ApiLink}
	{...props}
/>

export const to${name}Link = (queryParams?: ${queryParams}) => toLink(${name}ApiLink, queryParams);
export const use${name}Link = () => to${name}Link;

export const use${name}Promise = createPromiseHook<SourceInfer.Patch<${source}>, SourceInfer.Item<${source}>>(${name}ApiLink, "post");

export const ${name}Promise = createPromise<SourceInfer.Patch<${source}>, SourceInfer.Item<${source}>>(${name}ApiLink, "post");
`);
}

