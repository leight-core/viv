import {type IWithTranslation} from "../utils/IWithTranslation";
import {useTranslation}        from "./useTranslation";

/**
 * Translation variant which generates "t" with "label".
 */
export const useLabel = (
    {
        namespace,
        label
    }: IWithTranslation) => useTranslation([
    namespace,
    label,
].filter(Boolean).join("."));
