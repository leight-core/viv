import {IBootstrapConfig}         from "@leight-core/api";
import {ConfigProvider}           from "antd";
import type {ConfigProviderProps} from "antd/lib/config-provider";
import {Session}                  from "next-auth";
import {SessionProvider}          from "next-auth/react";
import {
	FC,
	useState
}                                 from "react";
import {useBootstrap}             from "./bootstrap";

export interface IBootstrapLoaderProps extends ConfigProviderProps {
	session?: Session | null;
	/**
	 * Enable next-auth session checks.
	 */
	withSession?: boolean;
}

export const BootstrapLoader: FC<IBootstrapLoaderProps> = ({session, withSession = true, ...props}) => {
	const [bootstrapConfig, setBootstrapConfig] = useState<IBootstrapConfig>();
	useBootstrap(setBootstrapConfig);
	return withSession ? <SessionProvider
		session={session}
		refetchInterval={60}
		refetchOnWindowFocus={true}
	>
		{bootstrapConfig && <ConfigProvider locale={bootstrapConfig.locale.antd} {...props}/>}
	</SessionProvider> : <>{bootstrapConfig && <ConfigProvider locale={bootstrapConfig.locale.antd} {...props}/>}</>;
};
