import FingerprintJS from "@fingerprintjs/fingerprintjs";
import {
    FingerprintContext,
    IFingerprintContext,
    IProviderChildren,
    withProviderChildren
}                    from "@leight-core/viv";
import {useQuery}    from "@tanstack/react-query";
import axios         from "axios";
import {
    FC,
    useMemo
}                    from "react";

export interface IFingerprintProviderProps {
    children?: IProviderChildren<IFingerprintContext>;
}

export const FingerprintProvider: FC<IFingerprintProviderProps> = ({children}) => {
    const fingerprint = useQuery(["fingerprint"], () => new Promise<string>(resolve => {
        const done = (fingerprint: string) => {
            resolve((axios.defaults.headers as any)["X-Client-Hash"] = fingerprint);
        };
        FingerprintJS.load()
            .then(agent => agent.get()
                .then(result => done(result.visitorId))
                .catch(() => done("unknown")))
            .catch(() => done("unknown"));
    }), {
        /**
         * Should be fresh for 60 minutes
         */
        staleTime: 1000 * 60 * 60 * 60,
    });
    const context     = useMemo<IFingerprintContext>(() => ({fingerprint}), []);
    return <FingerprintContext.Provider
        value={context}
    >
        {withProviderChildren(children, FingerprintContext)}
    </FingerprintContext.Provider>;
};
