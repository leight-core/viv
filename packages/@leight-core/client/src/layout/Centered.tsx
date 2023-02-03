import {Col, Row} from "antd";
import React, {FC, PropsWithChildren} from "react";

export type ICenteredProps = PropsWithChildren<{
	span?: number;
}>;

export const Centered: FC<ICenteredProps> = props => {
	return <Row justify={"center"}>
		<Col {...props}/>
	</Row>;
};
