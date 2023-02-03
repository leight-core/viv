import {Space, SpaceProps, Tooltip} from "antd";
import {FC, ReactNode} from "react";
import {useTranslation} from "react-i18next";

export interface IIconTextProps extends Partial<SpaceProps> {
	icon: ReactNode;
	text?: string | number;
	tooltip?: string;
	data?: any;
}

export const IconText: FC<IIconTextProps> = ({icon, text, tooltip, data, ...props}) => {
	const {t} = useTranslation();
	return tooltip ?
		<Tooltip title={t(tooltip, {data})}>
			<Space size={0} {...props}>
				{icon}
				{text && t("" + text, {data})}
			</Space>
		</Tooltip> :
		<Space size={0} {...props}>
			{icon}
			{text && t("" + text, {data})}
		</Space>;
};
