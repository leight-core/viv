import {LoadingOutlined} from "@ant-design/icons";
import {IIconProps} from "./interface";
import {FC} from "react";

export const LoaderIcon: FC<IIconProps> = props => <LoadingOutlined spin {...props}/>;
