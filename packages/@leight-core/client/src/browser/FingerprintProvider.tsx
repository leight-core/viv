import FingerprintJS        from "@fingerprintjs/fingerprintjs";
import {useQuery}           from "@tanstack/react-query";
import axios                from "axios";
import {
	FC,
	PropsWithChildren
}                           from "react";
import {FingerprintContext} from "./FingerprintContext";

export type IFingerprintProviderProps = PropsWithChildren;

export const FingerprintProvider: FC<IFingerprintProviderProps> = props => {
	const fingerprint = useQuery(["fingerprint"], () => new Promise<string>((resolve) => {
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

	return <FingerprintContext.Provider
		value={{
			fingerprint,
		}}
		{...props}
	/>;
};
