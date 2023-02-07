import {useI18NextContext} from "./I18NextContext";

export const useTranslation = () => {
	const {t} = useI18NextContext();
	/**
	 * Returns 't' just for compatibility reasons + right typings.
	 */
	return {t: (text: string | string[], values?: Record<string, any> | string) => t(text, values as any) as unknown as string};
}
