import {IFingerprintContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext} from "../context";

export const FingerprintContext = createContext(null as unknown as IFingerprintContext);

export const useFingerprintContext = () => useContext(FingerprintContext, "FingerprintContext");
