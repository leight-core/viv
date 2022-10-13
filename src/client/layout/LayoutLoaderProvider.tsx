import {
    ILoaderContext,
    IProviderChildren,
    LayoutLoaderContext,
    withProviderChildren
} from "@leight-core/viv";
import {
    FC,
    useRef,
    useState
} from "react";

export interface LayoutLoaderProviderProps {
    defaultLoading?: boolean;
    children?: IProviderChildren<ILoaderContext>;
}

export const LayoutLoaderProvider: FC<LayoutLoaderProviderProps> = ({defaultLoading = false, children}) => {
    const [loading, setLoading] = useState(defaultLoading);
    const context               = useRef<ILoaderContext>({
        isLoading: () => loading,
        loading:   (loading = true) => setLoading(loading),
        done:      () => setLoading(false),
    });

    return <LayoutLoaderContext.Provider
        value={context.current}
    >
        {withProviderChildren(children, LayoutLoaderContext)}
    </LayoutLoaderContext.Provider>;
};
