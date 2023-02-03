import {FC} from "react";
import {ButtonLink, IButtonLinkProps} from "../component";

export interface IBreadcrumbButtonProps extends IButtonLinkProps {
}

export const BreadcrumbButton: FC<IBreadcrumbButtonProps> = props => {
	return <ButtonLink
		style={{padding: 0}}
		type={"link"}
		size={"small"}
		{...props}
	/>;
};
