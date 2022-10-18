import {
    IItemGroupContext,
    IProviderChildren,
    ItemGroupContext,
    withProviderChildren
}                from "@leight/viv";
import {FC,}     from "react";
import {useMemo} from "use-memo-one";

export interface IItemGroupProviderProps {
    prefix: (string | number)[];
    translation?: string;
    children?: IProviderChildren<IItemGroupContext>;
}

export const ItemGroupProvider: FC<IItemGroupProviderProps> = ({prefix, translation, children}) => {
    return <ItemGroupContext.Provider
        value={useMemo(() => ({
            prefix,
            translation,
        }), [
            prefix,
            translation
        ])}
    >
        {withProviderChildren(children, ItemGroupContext)}
    </ItemGroupContext.Provider>;
};
