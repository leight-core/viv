import {
    FulltextBar,
    ICursorContext,
    IFilterContext,
    IListLoaderRenderEmpty,
    IListLoaderRenderNothing,
    INavigate,
    ISourceContext,
    ITranslationProps,
    ListLoader,
    useCursorContext,
    useNavigate,
    useOptionalFilterContext,
    useSourceContext
} from "@leight-core/viv";
import {
    InfiniteScroll,
    List
} from "antd-mobile";
import {
    ComponentProps,
    FC,
    ReactNode
} from "react";

export interface IInfiniteListHeaderRequest<TResponse> {
    sourceContext: ISourceContext<TResponse>;
    cursorContext: ICursorContext;
    filterContext?: IFilterContext | null;
}

export interface IInfiniteListSelectRenderLoading<TResponse> {
    sourceContext: ISourceContext<TResponse>;
    cursorContext: ICursorContext | null;
}

export interface IInfiniteListProps<TResponse> extends Partial<Omit<ComponentProps<typeof List>, "children" | "header">> {
    translation?: ITranslationProps;

    children?(item: TResponse): ReactNode;

    header?(request: IInfiniteListHeaderRequest<TResponse>): ReactNode;

    withFulltext?: boolean;

    /**
     * Override loading state indicator including no more data/empty list.
     *
     * @param props
     */
    renderLoading?(props: IInfiniteListSelectRenderLoading<TResponse>): ReactNode;

    renderEmpty?(props: IListLoaderRenderEmpty<TResponse>): ReactNode;

    renderNothing?(props: IListLoaderRenderNothing<TResponse>): ReactNode;
}

export interface IInfiniteListItemProps extends Omit<ComponentProps<typeof List["Item"]>, "onClick"> {
    onClick?(navigate: INavigate): void;
}

export const InfiniteListItem: FC<IInfiniteListItemProps> = ({onClick, clickable, ...props}) => {
    const navigate = useNavigate();
    return <List.Item
        clickable={clickable}
        onClick={onClick && clickable !== false ? () => onClick(navigate) : undefined}
        {...props}
    />;
};

export const InfiniteList = <TResponse, >(
    {
        children,
        translation,
        withFulltext = false,
        renderLoading,
        renderEmpty,
        renderNothing,
        header,
        ...props
    }: IInfiniteListProps<TResponse>) => {
    const sourceContext = useSourceContext<TResponse>();
    const cursorContext = useCursorContext();
    const filterContext = useOptionalFilterContext();
    if (withFulltext && header) {
        console.warn(`Using infinite list ${sourceContext.name} with fulltext and header specified; please use flags only or just header.`);
    }
    return <>
        <List
            header={withFulltext && (cursorContext.total || 0) > 0 ? <FulltextBar/> : header?.({sourceContext, cursorContext, filterContext})}
            {...props}
        >
            {sourceContext.data().map(item => children?.(item))}
        </List>
        <InfiniteScroll
            loadMore={async () => cursorContext.more(true)}
            hasMore={!sourceContext.result.isFetching && cursorContext.hasMore()}
        >
            {renderLoading?.({
                sourceContext,
                cursorContext,
            }) || <ListLoader<TResponse>
                translation={translation}
                renderEmpty={renderEmpty}
                renderNothing={renderNothing}
            />}
        </InfiniteScroll>
    </>;
};
