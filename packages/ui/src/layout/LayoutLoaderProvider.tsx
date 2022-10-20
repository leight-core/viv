import {
    Context,
    ILoaderContext,
    IProviderChildren,
    LayoutLoaderContext
}                from "@leight/ui";
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
        {Context.render(children, LayoutLoaderContext)}
    </LayoutLoaderContext.Provider>;
};
