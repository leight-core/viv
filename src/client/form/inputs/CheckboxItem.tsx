import {
    FormItem,
    IFormItemProps,
    INamePath
}                  from "@leight-core/viv";
import {
    Checkbox as CoolCheckbox,
    CheckboxProps
}                  from "antd";
import React, {FC} from "react";

export interface ICheckboxItemProps extends Partial<IFormItemProps> {
    /**
     * Field name:
     *
     * - https://ant.design/components/form/#NamePath
     */
    field: INamePath;
    checkboxProps?: Partial<CheckboxProps>;
}

/**
 * This one is just a tiny wrapper around common FormItem providing right binding to value props.
 *
 * Rest of props are sent to Antd SwitchItem component.
 *
 * Others:
 *
 * - https://ant.design/components/checkbox/
 */
export const CheckboxItem: FC<ICheckboxItemProps> = ({field, checkboxProps, ...props}) => {
    return <FormItem
        field={field}
        valuePropName={"checked"}
        {...props}
    >
        <CoolCheckbox defaultChecked={false} {...checkboxProps}/>
    </FormItem>;
};
