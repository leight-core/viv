import {
    Col,
    Row
} from "antd";
import React, {
    ComponentProps,
    FC
} from "react";

export type IPushRightProps = ComponentProps<typeof Col>;

export const PushRight: FC<IPushRightProps> = props => {
    return <Row align={"middle"} justify={"end"}>
        <Col {...props}/>
    </Row>;
};
