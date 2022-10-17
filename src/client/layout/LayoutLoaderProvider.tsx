import {
    ILoaderContext,
    IProviderChildren,
    LayoutLoaderContext,
    withProviderChildren
}                from "@leight-core/viv";
import {
    FC,
    useState
}                from "react";
import {useMemo} from "use-memo-one";

export interface LayoutLoaderProviderProps {
    defaultLoading?: boolean;
    children?: IProviderChildren<ILoaderContext>;
}

export const LayoutLoaderProvider: FC<LayoutLoaderProviderProps> = ({defaultLoading = false, children}) => {
    const [loading, setLoading] = useState(defaultLoading);
    return <LayoutLoaderContext.Provider
        value={useMemo(() => ({
            isLoading: () => loading,
            loading:   (loading = true) => setLoading(loading),
            done:      () => setLoading(false),
        }), [])}
    >
        {withProviderChildren(children, LayoutLoaderContext)}
    </LayoutLoaderContext.Provider>;
};
