import {TranslationOutlined} from "@ant-design/icons";
import {
    ILoaderLayoutProps,
    LoaderLayout
}                            from "@leight/desktop";
import {ITranslationBundle}  from "@leight/shared";
import {
    ITranslationsQuery,
    useI18NextContext
}                            from "@leight/ui";
import {
    FC,
    ReactNode,
    useEffect,
    useState
}                            from "react";

export interface ITranslationLoaderProps extends Partial<ILoaderLayoutProps<ITranslationBundle>> {
    useQuery?: ITranslationsQuery;
    logo?: ReactNode;
}

export const TranslationLoader: FC<ITranslationLoaderProps> = ({useQuery, logo, ...props}) => {
    const result                    = useQuery?.();
    const {i18next}                 = useI18NextContext();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (result?.isSuccess) {
            result.data.bundles.forEach(bundle => bundle.translations.forEach(translation => i18next.addResource(bundle.language, bundle.namespace || "translation", translation.key, translation.value)));
            setIsLoading(false);
        }
    }, [
        result?.isSuccess,
        result?.data
    ]);
    if (!result) {
        return <>{props.children}</>;
    }
    return <LoaderLayout
        logo={logo}
        icon={<TranslationOutlined/>}
        loading={isLoading}
        isError={result.isError}
        result={result.data}
        errorText={"Translations cannot be loaded."}
        {...props}
    />;
};
