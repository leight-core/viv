import {
	Breadcrumb,
	BreadcrumbProps
} from "antd";
import {
	FC,
	ReactNode
} from "react";

export interface IBreadcrumbsProps extends Partial<BreadcrumbProps> {
	children: ReactNode[];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({children, ...props}) => {
	return <Breadcrumb {...props}>
		{children.map((item, index) => <Breadcrumb.Item key={`item-${index}`}>{item}</Breadcrumb.Item>)}
	</Breadcrumb>;
};
