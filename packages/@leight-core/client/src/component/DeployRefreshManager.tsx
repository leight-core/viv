import {ReloadOutlined} from "@ant-design/icons";
import {IQueryHook}     from "@leight-core/api";
import {
	Button,
	Modal
}                       from "antd";
import {
	FC,
	PropsWithChildren,
	useEffect,
	useState
}                       from "react";
import {Trans}          from "react-i18next";
import {useTranslation} from "../i18n";

export type IDeployRefreshManagerProps = PropsWithChildren<{
	useVersionQuery: IQueryHook<void, string>;
}>;

export const DeployRefreshManager: FC<IDeployRefreshManagerProps> = ({useVersionQuery, children}) => {
	const {t}                   = useTranslation();
	const [version, setVersion] = useState(false);
	const versionQuery          = useVersionQuery(undefined, undefined, {
		refetchInterval:      60 * 60 * 1000,
		refetchOnWindowFocus: true,
		refetchOnReconnect:   true,
	});
	useEffect(() => {
		setVersion(versionQuery.data ? versionQuery.data !== process.env.NEXT_PUBLIC_VERSION : false);
	}, [versionQuery.data]);
	// noinspection SillyAssignmentJS
	return <>
		<Modal
			open={version}
			title={t("common.new.version.title", {data: {version: versionQuery.data}})}
			footer={<Button
				type={"primary"}
				size={"large"}
				icon={<ReloadOutlined/>}
				onClick={() => {
					/* eslint-disable no-self-assign */
					window.location.href = window.location.href;
				}}
			>
				{t("common.new.version.reload")}
			</Button>}
		>
			<Trans i18nKey={"common.new.version.content"} values={{version: versionQuery.data}}/>
		</Modal>
		{children}
	</>;
};
