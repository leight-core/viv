import {
    IOrderByContext,
    IProviderChildren,
    OrderByContext,
    withProviderChildren
}                from "@leight/viv";
import {
    useEffect,
    useState
}                from "react";
import {useMemo} from "use-memo-one";

export interface IOrderByProviderProps<TOrderBy = any> {
    name: string;
    /**
     * Default pre-set order; could be overridden by a user. Apply filter prop takes precedence.
     */
    defaultOrderBy?: TOrderBy;
    children?: IProviderChildren<IOrderByContext>;
}

export function OrderByProvider<TOrderBy, >({name, defaultOrderBy, children}: IOrderByProviderProps<TOrderBy>) {
    const [orderBy, setOrderBy] = useState<TOrderBy | undefined>(defaultOrderBy);
    useEffect(() => {
        setOrderBy(defaultOrderBy);
    }, [defaultOrderBy]);
    return <OrderByContext.Provider
        value={useMemo(() => ({
            name,
            get orderBy() {
                return orderBy;
            },
            setOrderBy,
        }), [name])}
    >
        {withProviderChildren(children, OrderByContext)}
    </OrderByContext.Provider>;
}
