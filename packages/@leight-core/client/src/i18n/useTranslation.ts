import {useI18NextContext} from "./I18NextContext";

export const useTranslation = () => {
	const {t} = useI18NextContext();
	/**
	 * Returns 't' just for compatibility reasons + right typings.
	 */
	return {
		t: (text: string | string[], valuesOrDefault?: Record<string, any> | string, values?: Record<string, any> | string) => {
			return t(text, valuesOrDefault as any, values) as unknown as string
		}
	};
}