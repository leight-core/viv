import {useI18NextContext} from "./I18NextContext";

export const useTranslation = () => {
	/**
	 * Returns 't' just for compatibility reasons.
	 */
	return {t: useI18NextContext().t};
}
