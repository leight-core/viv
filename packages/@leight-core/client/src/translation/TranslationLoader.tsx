import {TranslationOutlined} from "@ant-design/icons";
import {ITranslationBundle, ITranslationsQuery} from "@leight-core/api";
import {FC, ReactNode, useEffect, useState} from "react";
import {ILoaderLayoutProps, LoaderLayout} from "../layout";
import {useI18NextContext} from "../i18n";

export interface ITranslationLoaderProps extends Partial<ILoaderLayoutProps<ITranslationBundle>> {
	useQuery?: ITranslationsQuery;
	logo?: ReactNode;
}

export const TranslationLoader: FC<ITranslationLoaderProps> = ({useQuery, logo, ...props}) => {
	const result = useQuery?.();
	const {i18next} = useI18NextContext();
	const [isLoading, setIsLoading] = useState(true);
	if (!result) {
		return <>{props.children}</>;
	}
	useEffect(() => {
		if (result.isSuccess) {
			result.data.bundles.forEach(bundle => bundle.translations.forEach(translation => i18next.addResource(bundle.language, bundle.namespace || "translation", translation.key, translation.value)));
			setIsLoading(false);
		}
	}, [
		result.isSuccess,
		result.data
	]);
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
