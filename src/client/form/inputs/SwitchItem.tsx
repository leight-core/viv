import {
	FormItem,
	IFormItemProps
}                  from "@leight-core/client";
import {
	Switch as CoolSwitch,
	SwitchProps
}                  from "antd";
import {NamePath}  from "rc-field-form/lib/interface";
import React, {FC} from "react";

export interface ISwitchItemProps extends Partial<IFormItemProps> {
	/**
	 * Field name:
	 *
	 * - https://ant.design/components/form/#NamePath
	 */
	field: NamePath;
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
		children={<CoolSwitch defaultChecked={false} {...switchProps}/>}
	/>;
};
