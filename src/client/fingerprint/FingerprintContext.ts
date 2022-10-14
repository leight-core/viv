import {
    contextFactory,
    IFingerprintContext
} from "@leight-core/viv";

export const [
                 FingerprintContext,
                 useFingerprintContext,
                 useOptionalFingerprintContext,
             ] = contextFactory<IFingerprintContext>("FingerprintContext");
