import {
    ILoaderContext,
    IProviderChildren,
    LoaderContext,
    withProviderChildren
}                from "@leight-core/viv";
import {
    FC,
    useState
}                from "react";
import {useMemo} from "use-memo-one";

export interface ILoaderProviderProps {
    defaultLoading?: boolean;
    children?: IProviderChildren<ILoaderContext>;
}

export const LoaderProvider: FC<ILoaderProviderProps> = ({defaultLoading = false, children}) => {
    const [loading, setLoading] = useState(defaultLoading);
    return <LoaderContext.Provider
        value={useMemo(() => ({
            isLoading: () => loading,
            loading:   (loading = true) => setLoading(loading),
            done:      () => setLoading(false),
        }), [])}
    >
        {withProviderChildren(children, LoaderContext)}
    </LoaderContext.Provider>;
};
