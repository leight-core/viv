import {ISdk} from "@leight/server";
import {
    cleanup,
    generateImports,
    toGeneratorCommons
}             from "./utils";

export function generateEntityEndpoint(sdk: ISdk): string {
    const generatorCommons = toGeneratorCommons(sdk);

    sdk.imports.push(...[
        {
            imports: [
                "FC",
            ],
            from:    "\"react\"",
        },
        {imports: ["useQueryClient"], from: "\"@tanstack/react-query\""},
        {
            imports: [
                "QueryInfer",
            ],
            from:    "\"@leight/viv\"",
        },
        {
            imports: [
                "createQueryHook",
                "createPromiseHook",
                "createPromise",
                "toLink",
                "IFilterProviderProps",
                "FilterProvider",
                "useOptionalFilterContext",
                "useFilterContext",
                "IOrderByProviderProps",
                "OrderByProvider",
                "useOptionalOrderByContext",
                "useOrderByContext",
                "SourceControlProvider",
                "ISourceControlProviderProps",
            ],
            from:    "\"@leight/viv\"",
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

export interface I${name}FilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<${request}>>> {
}

export const ${name}FilterProvider: FC<I${name}FilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<${request}>> name={"${name}"} {...props}/>;

export const use${name}OptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<${request}>>()
export const use${name}FilterContext = () => useFilterContext<QueryInfer.Filter<${request}>>()

export interface I${name}OrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<${request}>>> {
}

export const ${name}OrderByProvider: FC<I${name}OrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<${request}>> name={"${name}"} {...props}/>;

export const use${name}OptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<${request}>>()
export const use${name}OrderByContext = () => useOrderByContext<QueryInfer.OrderBy<${request}>>()

export interface I${name}SourceControlProviderProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<${request}>, QueryInfer.OrderBy<${request}>, ${queryParams}>> {
}

export const ${name}SourceControlProvider: FC<I${name}SourceControlProviderProps> = props => <SourceControlProvider<QueryInfer.Filter<${request}>, QueryInfer.OrderBy<${request}>> name={"${name}"} {...props}/>;

export const use${name}QueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([${name}ApiLink]);
}
`);
}
