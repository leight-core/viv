import {
    FormItem,
    IFormItemProps,
    INamePath
}                  from "@leight/viv";
import {
    Switch as CoolSwitch,
    SwitchProps
}                  from "antd";
import React, {FC} from "react";

export interface ISwitchItemProps extends Partial<IFormItemProps> {
    /**
     * Field name:
     *
     * - https://ant.design/components/form/#NamePath
     */
    field: INamePath;
    switchProps?: Partial<SwitchProps>;
}

/**
 * This one is just a tiny wrapper around common FormItem providing right binding to value props.
 *
 * Rest of props are sent to Antd SwitchItem component.
 *
 * Others:
 *
 * - https://ant.design/components/switch/
 */
export const SwitchItem: FC<ISwitchItemProps> = ({field, switchProps, ...props}) => {
    return <FormItem
        field={field}
        valuePropName={"checked"}
        {...props}
    >
        <CoolSwitch defaultChecked={false} {...switchProps}/>
    </FormItem>;
};
