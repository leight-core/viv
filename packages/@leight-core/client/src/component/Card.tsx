import {Card as CoolCard, CardProps as CoolCardProps} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {isString} from "@leight/utils";
import {useMobile} from "../responsive";

export interface ICardProps extends Partial<CoolCardProps> {
}

export const Card: FC<ICardProps> = ({title, ...props}) => {
	const mobile = useMobile();
	const {t} = useTranslation();
	return <CoolCard
		headStyle={mobile({minHeight: "32px"})}
		title={isString(title) ? t(title) : title}
		bordered={false}
		{...props}
	/>;
};
