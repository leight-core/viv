import {ISdk}            from "@leight-core/api";
import {generateImports} from "./generateImports";
import {cleanup}         from "./utils";

export function generateGetEndpoint(sdk: ISdk): string {
	const name        = sdk.endpoint.name.replace("Endpoint", "");
	const query       = (sdk.endpoint.generics?.[1] || "any");
	const response    = (sdk.endpoint.generics?.[0] || "void");
	const queryParams = `I${name}QueryParams`;
	const {api}       = sdk.endpoint;

	sdk.imports.push(...[
		{
			imports: [
				"FC",
				"createContext"
			], from: "\"react\""
		},
		{
			imports: [
				"IQueryParams",
				"IEntityContext"
			], from: "\"@leight-core/api\""
		},
		{imports: ["useQueryClient"], from: "\"@tanstack/react-query\""},
		{
			imports: [
				"toLink",
				"createQueryHook",
				"createPromiseHook",
				"createPromise",
				"useContext",
				"useOptionalContext",
				"IEntityProviderProps",
				"EntityContext",
				"EntityProvider",
				"IQueryProps",
				"Query",
			],
			from:    "\"@leight-core/client\""
		},
	]);

	// language=text
	return cleanup(`
/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

${generateImports(sdk.imports)}

${sdk.interfaces.map(item => item.source).join("\n")}

export const ${name}ApiLink = "${api}";

export type ${queryParams} = ${query};

export const ${name}Context = createContext(null as unknown as IEntityContext<${response}>);

export const use${name}Context = (): IEntityContext<${response}> => useContext(${name}Context, "${name}Context");
export const useOptional${name}Context = () => useOptionalContext<IEntityContext<${response}>>(${name}Context as any);

export interface I${name}Provider extends IEntityProviderProps<${response}> {
}

export const ${name}Provider: FC<I${name}Provider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <${name}Context.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const use${name}Query = createQueryHook<void, ${response}, ${queryParams}>(${name}ApiLink, "get");

export const use${name}QueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([${name}ApiLink]);
}

export const to${name}Link = (queryParams?: ${queryParams}) => toLink(${name}ApiLink, queryParams);
export const use${name}Link = () => to${name}Link;

export const use${name}Promise = createPromiseHook<void, ${response}, ${queryParams}>(${name}ApiLink, "get");
export const ${name}Promise = createPromise<void, ${response}, ${queryParams}>(${name}ApiLink, "get");

export interface IFetch${name}Props extends Partial<IQueryProps<void, ${response}, ${queryParams}>> {
}

export const Fetch${name}: FC<IFetch${name}Props> = props => <Query<void, ${response}, ${queryParams}>
	useQuery={use${name}Query}
	request={undefined}
	context={useOptional${name}Context()}
	{...props}
/>;
`);
}
