import {
    cleanup,
    generateImports,
    ISdk,
    toGeneratorCommons
} from "@leight-core/viv";

export function generateQueryEndpoint(sdk: ISdk): string {
    const generatorCommons = toGeneratorCommons(sdk);

    sdk.imports.push(...[
        {
            imports: [
                "FC",
                "ConsumerProps",
            ],
            from:    "\"react\"",
        },
        {imports: ["useQueryClient"], from: "\"@tanstack/react-query\""},
        {
            imports: [
                "ISourceContext",
                "IToOptionMapper",
                "QueryInfer",
                "SourceInfer",
            ],
            from:    "\"@leight-core/viv\"",
        },
        {
            imports: [
                "BlockProvider",
                "useSourceContext",
                "ISourceProviderProps",
                "createQueryHook",
                "createPromiseHook",
                "createPromise",
                "toLink",
                "SourceProvider",
                "SourceContext",
                "List",
                "IListProps",
                "InfiniteList",
                "IInfiniteListProps",
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
                "IFilterWithoutTranslationProps",
                "Filter",
                "IQuerySourceSelectProps",
                "QuerySourceSelect",
                "SelectionProvider",
                "ISelectionProviderProps",
                "useOptionalSelectionContext",
                "useSelectionContext",
                "Table",
                "ITableProps",
                "DrawerSelectItem",
                "IDrawerSelectItemProps",
            ],
            from:    "\"@leight-core/viv\"",
        },
    ]);

    const queryParams = `I${generatorCommons.name}QueryParams`;
    const name        = generatorCommons.name;
    const source      = generatorCommons.generics[0];
    const request     = `SourceInfer.Query<${source}>`;
    const response    = `SourceInfer.Item<${source}>`;

    // language=text
    return cleanup(`
/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

${generateImports(sdk.imports)}

${sdk.interfaces.map(item => item.source).join("\n")}

export const ${name}ApiLink = "${generatorCommons.api}";
export const ${name}CountApiLink = "${generatorCommons.api}/count";

export type ${queryParams} = ${generatorCommons.generics[2] ?? "any"};

export const use${name}Query = createQueryHook<${request}, ${response}[], ${queryParams}>(${name}ApiLink, "post");
export const use${name}CountQuery = createQueryHook<${request}, number, ${queryParams}>(${name}CountApiLink, "post");

export const use${name}Source = () => useSourceContext<${response}>()

export interface I${name}SourceContext extends ISourceContext<${response}> {
}

export interface I${name}SourceConsumerProps extends ConsumerProps<ISourceContext<${response}>> {
}

export const ${name}SourceConsumer: FC<I${name}SourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface I${name}ProviderProps extends Partial<ISourceProviderProps<${response}>> {
}

export const ${name}Provider: FC<I${name}ProviderProps> = props => {
	return <SourceProvider<${response}>
		name={"${name}"}
		useQuery={use${name}Query}
		useCountQuery={use${name}CountQuery}
		{...props}
	/>;
};

export const to${name}Link = (queryParams?: ${queryParams}) => toLink(${name}ApiLink, queryParams);
export const use${name}Link = () => to${name}Link;

export const use${name}Promise = createPromiseHook<${request}, ${response}[], ${queryParams}>(${name}ApiLink, "post");
export const ${name}Promise = createPromise<${request}, ${response}[], ${queryParams}>(${name}ApiLink, "post");

export interface I${name}FilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<${request}>>> {
}

export const ${name}FilterProvider: FC<I${name}FilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<${request}>> name={"${name}"} {...props}/>;

export const use${name}OptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<${request}>>()
export const use${name}FilterContext = () => useFilterContext<QueryInfer.Filter<${request}>>()

export interface I${name}ProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<${request}>> {
}

export const ${name}ProviderFilter: FC<I${name}ProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.${name}'}
/>;

export interface I${name}OrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<${request}>>> {
}

export const ${name}OrderByProvider: FC<I${name}OrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<${request}>> name={"${name}"} {...props}/>;

export const use${name}OptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<${request}>>()
export const use${name}OrderByContext = () => useOrderByContext<QueryInfer.OrderBy<${request}>>()

export interface I${name}ProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<${request}>, QueryInfer.OrderBy<${request}>, ${queryParams}>> {
}

export const ${name}ProviderControl: FC<I${name}ProviderControlProps> = props => <SourceControlProvider<QueryInfer.Filter<${request}>, QueryInfer.OrderBy<${request}>> name={"${name}"} {...props}/>;

export interface I${name}TableSourceProps extends Partial<ITableProps<${response}>> {
	providerProps?: Partial<I${name}ProviderProps>;
}

export const ${name}TableSource: FC<I${name}TableSourceProps> = ({providerProps, ...props}) => {
	return <${name}Provider
		withCount
		{...providerProps}
	>
		<Table<${response}>
			translation={${name}ApiLink}
			{...props}					
		/>
	</${name}Provider>;
}

export interface I${name}ListSourceProps extends Partial<IListProps<${response}>> {
	providerProps?: Partial<I${name}ProviderProps>;
}

export const ${name}ListSource: FC<I${name}ListSourceProps> = ({providerProps, ...props}) => {
	return <${name}Provider
		withCount
		{...providerProps}
	>
		<List<${response}>
			{...props}					
		/>
	</${name}Provider>;
}

export interface I${name}InfiniteListSourceProps extends Partial<IInfiniteListProps<${response}>> {
	providerProps?: Partial<I${name}ProviderProps>;
}

export const ${name}InfiniteListSource: FC<I${name}InfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <${name}Provider
		withCount
		{...providerProps}
	>
		<InfiniteList<${response}>
			translation={{
				namespace: ${name}ApiLink,
			}}
			{...props}					
		/>
	</${name}Provider>;
}

export interface I${name}SourceSelectProps extends IQuerySourceSelectProps<${response}> {
	toOption: IToOptionMapper<${response}>;
	providerProps?: Partial<I${name}ProviderProps>;
}

export const ${name}SourceSelect: FC<I${name}SourceSelectProps> = ({providerProps, ...props}) => {
	return <${name}Provider {...providerProps}>
		<QuerySourceSelect<${response}> {...props}/>
	</${name}Provider>;
};

export interface I${name}SelectionProviderProps extends Partial<ISelectionProviderProps<${response}>> {
}

export const ${name}SelectionProvider: FC<I${name}SelectionProviderProps> = props => {
	return <SelectionProvider<${response}> {...props}/>
}

export const use${name}CountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([${name}CountApiLink]);
};

export const use${name}QueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([${name}ApiLink]),
		withCount && queryClient.invalidateQueries([${name}CountApiLink]),
	]);
};

export const use${name}OptionalSelectionContext = () => useOptionalSelectionContext<${response}>();
export const use${name}SelectionContext = () => useSelectionContext<${response}>();

export interface I${name}DrawerItemProps extends Omit<IDrawerSelectItemProps<${response}>, "ofSelection" | "sourceProviderProps"> {
}

export const ${name}DrawerItem: FC<I${name}DrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<${response}>
			sourceProviderProps={{
				name: "${name}",
				useQuery: use${name}Query,
				useCountQuery: use${name}CountQuery,
			}}			
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					${name}Promise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: ${name}ApiLink, 
					text: "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>
}
`);
}
