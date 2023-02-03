import {FC} from "react";
import {IMenuProps, Menu} from "./Menu";

export interface IHorizontalMenuProps extends Partial<IMenuProps> {
}

export const HorizontalMenu: FC<IHorizontalMenuProps> = props => {
	return <Menu
		style={{border: "none"}}
		mode={"horizontal"}
		{...props}
	/>;
};
