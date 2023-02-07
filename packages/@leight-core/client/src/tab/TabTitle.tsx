import {Space, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "../i18n";

export interface ITabTitleProps {
	label: string;
}

export const TabTitle: FC<ITabTitleProps> = ({label}) => {
	const {t} = useTranslation();
	return <Space direction={"vertical"}>
		{t(label + ".tab.label")}
		<Typography.Text type={"secondary"}>{t(label + ".tab.description")}</Typography.Text>
	</Space>;
};
