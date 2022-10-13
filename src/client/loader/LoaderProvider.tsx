import {
    ILoaderContext,
    IProviderChildren,
    LoaderContext,
    withProviderChildren
} from "@leight-core/viv";
import {
    FC,
    useRef,
    useState
} from "react";

export interface ILoaderProviderProps {
    defaultLoading?: boolean;
    children?: IProviderChildren<ILoaderContext>;
}

export const LoaderProvider: FC<ILoaderProviderProps> = ({defaultLoading = false, children}) => {
    const [loading, setLoading] = useState(defaultLoading);
    const context               = useRef<ILoaderContext>({
        isLoading: () => loading,
        loading:   (loading = true) => setLoading(loading),
        done:      () => setLoading(false),
    });

    return <LoaderContext.Provider
        value={context.current}
    >
        {withProviderChildren(children, LoaderContext)}
    </LoaderContext.Provider>;
};
