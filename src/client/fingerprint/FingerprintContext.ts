import {
    createContext,
    useContext,
    useOptionalContext
} from "@leight-core/viv";

export const FingerprintContext = createContext();

export const useFingerprintContext         = () => useContext(FingerprintContext, "FingerprintContext");
export const useOptionalFingerprintContext = () => useOptionalContext(FingerprintContext);
