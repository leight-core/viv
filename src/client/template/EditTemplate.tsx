import {Divider} from "antd";
import {FC}      from "react";
import {
	ITemplateProps,
	Template
}                from "./Template";

export interface IEditTemplateProps extends ITemplateProps {
}

export const EditTemplate: FC<IEditTemplateProps> = ({label, children, ...props}) => {
	return <Template
		label={label ? label + ".edit" : label}
		{...props}
	>
		{children ? <>
			<Divider/>
			{children}
		</> : children}
	</Template>;
};
