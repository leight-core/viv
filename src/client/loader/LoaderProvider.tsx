import {
    ILoaderContext,
    IProviderChildren,
    LoaderContext,
    withProviderChildren
} from "@leight-core/viv";
import {
    FC,
    useMemo,
    useState
} from "react";

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
