import {Translate}  from "@leight/ui";
import {Typography} from "antd";
import {
    ComponentProps,
    FC
}                   from "react";

export interface ICopyTextProps extends Partial<ComponentProps<typeof Typography["Text"]>> {
    copy: string;
    /**
     * Translation label for copy tooltips
     */
    tooltip: string;
}

export const CopyText: FC<ICopyTextProps> = ({tooltip, copy, ...props}) => {
    return <Typography.Text
        copyable={{
            text:     copy,
            tooltips: [
                <Translate text={"copy"} namespace={tooltip}/>,
                <Translate text={"copied"} namespace={tooltip}/>,
            ]
        }}
        {...props}
    />;
};
