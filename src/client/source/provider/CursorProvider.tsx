import {
    CursorContext,
    ICursorContext,
    IProviderChildren,
    withProviderChildren
}                from "@leight-core/viv";
import {
    FC,
    useEffect,
    useState
}                from "react";
import {useMemo} from "use-memo-one";

export interface ICursorProviderProps {
    name: string;
    defaultPage?: number;
    defaultSize?: number;
    children?: IProviderChildren<ICursorContext>;
}

export const CursorProvider: FC<ICursorProviderProps> = (
    {
        name,
        defaultPage = 0,
        defaultSize = 10,
        children,
    }) => {
    const [[page, size], setPage] = useState<[number, number]>([
        defaultPage,
        defaultSize
    ]);
    const [pages, setPages]       = useState<number>();
    const [total, setTotal]       = useState<number>();
    const [count, setCount]       = useState<number>();
    const [append, setAppend]     = useState<boolean>();
    const [prepend, setPrepend]   = useState<boolean>();
    useEffect(() => {
        setPage([
            defaultPage,
            size
        ]);
    }, [defaultPage]);
    useEffect(() => {
        setPage([
            page,
            defaultSize
        ]);
    }, [defaultSize]);

    return <CursorContext.Provider
        value={useMemo(() => {
            const context: ICursorContext = {
                name,
                page,
                pages,
                total,
                count,
                size,
                append,
                prepend,
                setPage:      (page, size = defaultSize) => setPage([
                    page,
                    size
                ]),
                setPages:     count => {
                    setCount(count);
                    setPages(count !== undefined ? Math.ceil(count / size) : undefined);
                },
                setPageCount: setPages,
                setTotal,
                next:         append => {
                    setAppend(append);
                    setPage([
                        page + 1,
                        size
                    ]);
                },
                prev:         prepend => {
                    setPrepend(prepend);
                    setPage([
                        Math.max(0, page - 1),
                        size
                    ]);
                },
                hasMore:      () => pages ? page < pages : false,
                more:         append => context.next(append),
            };
            return context;
        }, [
            name,
            defaultSize
        ])}
    >
        {withProviderChildren(children, CursorContext)}
    </CursorContext.Provider>;
};
