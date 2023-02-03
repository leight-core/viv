import {NamePath} from "rc-field-form/lib/interface";
import {FC, PropsWithChildren} from "react";
import {useOptionalItemGroupContext} from "./ItemGroupContext";
import {ItemGroupProvider} from "./ItemGroupProvider";

export type IItemGroupProps = PropsWithChildren<{
	prefix: NamePath;
	translation?: string;
}>;

/**
 * Simple component used to add prefixes to FormItems (so it's possible to arbitrary alter field names).
 *
 * Internally context is used, so the stuff works regardless of the component tree.
 *
 * Also, do no not use some kind of "global" item group.
 */
export const ItemGroup: FC<IItemGroupProps> = ({prefix, ...props}) => {
	const itemGroupContext = useOptionalItemGroupContext();
	const name = ([] as (string | number)[]).concat(itemGroupContext ? itemGroupContext.prefix : [], Array.isArray(prefix) ? prefix : [prefix]);
	return <ItemGroupProvider prefix={name} {...props}/>;
};
