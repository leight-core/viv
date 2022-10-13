import {
    cleanup,
    generateImports,
    ISdk
} from "@leight-core/viv";

export function generateFetchEndpoint(sdk: ISdk): string {
    const name        = sdk.endpoint.name.replace("Endpoint", "");
    const response    = `SourceInfer.Item<${(sdk.endpoint.generics?.[0] || "void")}>`;
    const queryParams = `I${name}QueryParams`;
    const api         = sdk.endpoint.api;

    sdk.imports.push(...[
        {
            imports: [
                "FC",
                "createContext",
                "ReactElement",
                "ReactNode",
            ],
            from:    "\"react\""
        },
        {
            imports: [
                "BreadcrumbProps",
                "Breadcrumb",
            ],
            from:    "\"antd\""
        },
        {
            imports: [
                "IEntityContext",
                "SourceInfer",
                "IWithIdentityQuery",
                "INavigate",
            ],
            from:    "\"@leight-core/viv\""
        },
        {
            imports: [
                "isCallable",
            ],
            from:    "\"@leight-core/viv\""
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
                "BrowserPage",
                "IBrowserPageProps",
                "MobilePage",
                "IMobilePageProps",
                "useParams",
            ],
            from:    "\"@leight-core/viv\""
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

export type ${queryParams} = IWithIdentityQuery;

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
	id: string;
}

export const Fetch${name}: FC<IFetch${name}Props> = ({id, ...props}) => <Query<void, ${response}, ${queryParams}>
	useQuery={use${name}Query}
	request={undefined}
	context={useOptional${name}Context()}
	queryParams={{id}}
	{...props}
/>;

export type I${name}PageExtra = ReactElement | ((entityContext: IEntityContext<${response}>) => ReactElement);
export type I${name}PageFooter = ReactElement | ((entityContext: IEntityContext<${response}>) => ReactElement);
export type I${name}PageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<${response}>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface I${name}BrowserPageProps extends Omit<IBrowserPageProps, "children" | "breadcrumbProps" | "extra" | "footer" | "onBack"> {
	onBack?: (navigate: INavigate, entityContext: IEntityContext<${response}>) => void;
	children?: ReactNode | ((data: ${response}) => ReactNode);
	breadcrumbProps?: I${name}PageBreadcrumb;
	extra?: I${name}PageExtra;
	footer?: I${name}PageFooter;
}

export const ${name}BrowserPage: FC<I${name}BrowserPageProps> = ({children, breadcrumbProps, title, extra, footer, values, onBack, ...props}) => {
	const {id} = useParams();
	return <${name}Provider>
		<${name}Context.Consumer>
			{entityContext => <BrowserPage
				title={entityContext.entity ? title : undefined}
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				footer={footer ? (isCallable(footer) ? (footer as any)(entityContext) : footer) : undefined}
				values={{
					entity: entityContext.entity,
					...values,
				}}
				onBack={onBack ? navigate => onBack?.(navigate, entityContext) : undefined}
				{...props}
			>
				<Fetch${name}
					context={entityContext}
					id={id}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</Fetch${name}>
			</BrowserPage>}
		</${name}Context.Consumer>
	</${name}Provider>;
};

export interface I${name}MobilePageProps extends Omit<IMobilePageProps, "children" > {
	children?: ReactNode | ((data: ${response}) => ReactNode);
}

export const ${name}MobilePage: FC<I${name}MobilePageProps> = ({children, title, values, ...props}) => {
	const {id} = useParams();
	return <${name}Provider>
		<${name}Context.Consumer>
			{entityContext => <MobilePage
				title={entityContext.entity ? title : undefined}
				values={{
					entity: entityContext.entity,
					...values,
				}}
				{...props}
			>
				<Fetch${name}
					context={entityContext}
					id={id}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</Fetch${name}>
			</MobilePage>}
		</${name}Context.Consumer>
	</${name}Provider>;
};
`);
}
