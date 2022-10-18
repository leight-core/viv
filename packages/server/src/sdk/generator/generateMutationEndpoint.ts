import {ISdk} from "@leight/server";
import {
    cleanup,
    generateImports,
    toGeneratorCommons
}             from "./utils";

export function generateMutationEndpoint(sdk: ISdk): string {
    const generatorCommons = toGeneratorCommons(sdk);

    sdk.imports.push(...[
        {imports: ["FC"], from: "\"react\""},
        {
            imports: [
                "IQueryParams",
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
                "useSourceContext",
                "ISourceProviderProps",
                "createQueryHook",
                "createPromiseHook",
                "createPromise",
                "toLink",
                "createMutationHook",
                "createPromise",
            ],
            from:    "\"@leight/viv\"",
        },
    ]);

    const name        = generatorCommons.name;
    const generics    = generatorCommons.generics.join(", ");
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

export const use${name}Mutation = createMutationHook<${generics}>(${name}ApiLink, "post");

export interface I${name}DefaultFormProps extends Partial<IFormProps<${generics}>> {
}

export const ${name}DefaultForm: FC<I${name}DefaultFormProps> = props => <Form<${generics}>
	useMutation={use${name}Mutation}
	translation={${name}ApiLink}
	{...props}
/>

export interface I${name}DefaultMobileFormProps extends Partial<IMobileFormProps<${generics}>> {
}

export const ${name}DefaultMobileForm: FC<I${name}DefaultMobileFormProps> = props => <MobileForm<${generics}>
	useMutation={use${name}Mutation}
	translation={${name}ApiLink}
	{...props}
/>

export const to${name}Link = (queryParams?: ${queryParams}) => toLink(${name}ApiLink, queryParams);
export const use${name}Link = () => to${name}Link;

export const use${name}Promise = createPromiseHook<${generics}>(${name}ApiLink, "post");
export const create${name}Promise = createPromise<${generics}>(${name}ApiLink, "post");
`);
}
