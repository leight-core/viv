import {ISdk}            from "@leight-core/api";
import {generateImports} from "./generateImports";
import {
	cleanup,
	toGeneratorCommons
}                        from "./utils";

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
				"InferQuery",
			],
			from:    "\"@leight-core/api\"",
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
			from:    "\"@leight-core/client\"",
		},
	]);

	const queryParams = `I${generatorCommons.name}QueryParams`;
	const {name}      = generatorCommons;
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

export interface I${name}FilterProviderProps extends Partial<IFilterProviderProps<InferQuery.Filter<${request}>>> {
}

export const ${name}FilterProvider: FC<I${name}FilterProviderProps> = props => <FilterProvider<InferQuery.Filter<${request}>> name={"${name}"} {...props}/>;

export const use${name}OptionalFilterContext = () => useOptionalFilterContext<InferQuery.Filter<${request}>>()
export const use${name}FilterContext = () => useFilterContext<InferQuery.Filter<${request}>>()

export interface I${name}OrderByProviderProps extends Partial<IOrderByProviderProps<InferQuery.OrderBy<${request}>>> {
}

export const ${name}OrderByProvider: FC<I${name}OrderByProviderProps> = props => <OrderByProvider<InferQuery.OrderBy<${request}>> name={"${name}"} {...props}/>;

export const use${name}OptionalOrderByContext = () => useOptionalOrderByContext<InferQuery.OrderBy<${request}>>()
export const use${name}OrderByContext = () => useOrderByContext<InferQuery.OrderBy<${request}>>()

export interface I${name}SourceControlProviderProps extends Partial<ISourceControlProviderProps<InferQuery.Filter<${request}>, InferQuery.OrderBy<${request}>, ${queryParams}>> {
}

export const ${name}SourceControlProvider: FC<I${name}SourceControlProviderProps> = props => <SourceControlProvider<InferQuery.Filter<${request}>, InferQuery.OrderBy<${request}>> name={"${name}"} {...props}/>;

export const use${name}QueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([${name}ApiLink]);
}
`);
}
