import {Ellipsis as CoolEllipsis} from "antd-mobile";
import {
    ComponentProps,
    FC
}                                 from "react";

export interface IEllipsisProps extends ComponentProps<typeof CoolEllipsis> {
}

export const Ellipsis: FC<IEllipsisProps> = props => {
    return <CoolEllipsis
        style={{
            wordBreak: "break-word",
        }}
        {...props}
    />;
};
