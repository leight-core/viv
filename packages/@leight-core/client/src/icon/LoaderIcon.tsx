import {LoadingOutlined} from "@ant-design/icons";
import {FC}              from "react";
import {IIconProps}      from "./interface";

export const LoaderIcon: FC<IIconProps> = props => <LoadingOutlined spin {...props}/>;
