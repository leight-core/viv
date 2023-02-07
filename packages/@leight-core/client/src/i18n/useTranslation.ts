import {useI18NextContext} from "./I18NextContext";

export const useTranslation = () => {
	return useI18NextContext().t;
}
