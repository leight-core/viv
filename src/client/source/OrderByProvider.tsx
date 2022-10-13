import {OrderByContext} from "@leight-core/viv";
import {
    PropsWithChildren,
    useEffect,
    useState
}                       from "react";

export type IOrderByProviderProps<TOrderBy = any> = PropsWithChildren<{
    name: string;
    /**
     * Default pre-set order; could be overridden by a user. Apply filter prop takes precedence.
     */
    defaultOrderBy?: TOrderBy;
}>

export function OrderByProvider<TOrderBy, >({name, defaultOrderBy, ...props}: IOrderByProviderProps<TOrderBy>) {
    const [orderBy, setOrderBy] = useState<TOrderBy | undefined>(defaultOrderBy);
    useEffect(() => {
        setOrderBy(defaultOrderBy);
    }, [defaultOrderBy]);
    return <OrderByContext.Provider
        value={{
            name,
            orderBy,
            setOrderBy,
        }}
        {...props}
    />;
}
