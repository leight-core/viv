import {IFingerprintContext} from "@leight-core/api";
import {useContext}          from "@leight-core/client";
import {createContext}       from "react";

export const FingerprintContext = createContext(null as unknown as IFingerprintContext);

export const useFingerprintContext = () => useContext(FingerprintContext, "FingerprintContext");
