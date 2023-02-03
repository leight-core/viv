import {MoreOutlined} from "@ant-design/icons";
import {Button, ButtonProps, Dropdown, DropDownProps, Menu} from "antd";
import {FC, ReactNode} from "react";

export interface IQuickMenuProps extends Partial<DropDownProps> {
	icon?: ReactNode;
	buttonProps?: ButtonProps;
}

export const QuickMenu: FC<IQuickMenuProps> = ({icon = <MoreOutlined/>, buttonProps, children, ...props}) => {
	return <Dropdown
		trigger={["click"]}
		overlay={() => <Menu>{children}</Menu>}
		arrow
		{...props}
	>
		<Button
			size={"middle"}
			type={"link"}
			icon={icon}
			{...buttonProps}
		/>
	</Dropdown>;
};
