import {
    IItemGroupContext,
    IProviderChildren,
    ItemGroupContext,
    withProviderChildren
} from "@leight-core/viv";
import {
    FC,
    useMemo
} from "react";

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
        }), [])}
    >
        {withProviderChildren(children, ItemGroupContext)}
    </ItemGroupContext.Provider>;
};
