import {
    createContext,
    ILoaderContext,
    useContext,
    useOptionalContext
} from "@leight-core/viv";

export const LoaderContext = createContext<ILoaderContext>();

export const useLoaderContext         = () => useContext<ILoaderContext>(LoaderContext, "LoaderContext");
export const useOptionalLoaderContext = () => useOptionalContext<ILoaderContext>(LoaderContext);
