import {
    cleanup,
    generateImports,
    ISdk,
    toGeneratorCommons
} from "@leight-core/viv";

export function generateCreateEndpoint(sdk: ISdk): string {
    const generatorCommons = toGeneratorCommons(sdk);

    sdk.imports.push(...[
        {imports: ["FC"], from: "\"react\""},
        {
            imports: [
                "SourceInfer",
            ],
            from:    "\"@leight-core/viv\""
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
            from:    "\"@leight-core/viv\"",
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

export const use${name}Mutation = createMutationHook<SourceInfer.Create<${source}>, SourceInfer.Item<${source}>>(${name}ApiLink, "post");

export interface I${name}DefaultFormProps extends Partial<IFormProps<SourceInfer.Create<${source}>, SourceInfer.Item<${source}>>> {
}

export const ${name}DefaultForm: FC<I${name}DefaultFormProps> = props => <Form<SourceInfer.Create<${source}>, SourceInfer.Item<${source}>>
	useMutation={use${name}Mutation}
	translation={${name}ApiLink}
	{...props}
/>

export interface I${name}DefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Create<${source}>, SourceInfer.Item<${source}>>> {
}

export const ${name}DefaultMobileForm: FC<I${name}DefaultMobileFormProps> = props => <MobileForm<SourceInfer.Create<${source}>, SourceInfer.Item<${source}>>
	useMutation={use${name}Mutation}
	translation={${name}ApiLink}
	{...props}
/>

export const to${name}Link = (queryParams?: ${queryParams}) => toLink(${name}ApiLink, queryParams);
export const use${name}Link = () => to${name}Link;

export const use${name}Promise = createPromiseHook<SourceInfer.Create<${source}>, SourceInfer.Item<${source}>>(${name}ApiLink, "post");

export const ${name}Promise = createPromise<SourceInfer.Create<${source}>, SourceInfer.Item<${source}>>(${name}ApiLink, "post");
`);
}

