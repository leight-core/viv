import {
    FormLoaderContext,
    ILoaderContext,
    IProviderChildren,
    withProviderChildren
} from "@leight/viv";
import {
    FC,
    useMemo,
    useState
} from "react";

export interface FormLoadingProviderProps {
    defaultLoading?: boolean;
    children?: IProviderChildren<ILoaderContext>;
}

export const FormLoadingProvider: FC<FormLoadingProviderProps> = ({defaultLoading = false, children}) => {
    const [loading, setLoading] = useState(defaultLoading);
    const context               = useMemo<ILoaderContext>(() => ({
        isLoading: () => loading,
        loading:   (loading = true) => setLoading(loading),
        done:      () => setLoading(false),
    }), []);

    return <FormLoaderContext.Provider
        value={context}
    >
        {withProviderChildren(children, FormLoaderContext)}
    </FormLoaderContext.Provider>;
};
