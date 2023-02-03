import {Space, SpaceProps} from "antd";
import {FC} from "react";
import {useIsMobile} from "../responsive";

export interface IButtonBarProps extends Partial<SpaceProps> {
	inline?: boolean;
}

export const ButtonBar: FC<IButtonBarProps> = ({inline = true, ...props}) => {
	const isMobile = useIsMobile();
	return <Space
		size={0}
		align={"center"}
		direction={(!isMobile || inline) ? "horizontal" : "vertical"}
		{...props}
	/>;
};
