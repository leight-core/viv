import {UseQueryResult} from "@tanstack/react-query";

export interface IFingerprintContext {
    readonly fingerprint: UseQueryResult<string>;
}
