import {ItemGroupContext} from "@leight-core/viv";
import {
    FC,
    PropsWithChildren
}                         from "react";

export type IItemGroupProviderProps = PropsWithChildren<{
    prefix: (string | number)[];
    translation?: string;
}>;

export const ItemGroupProvider: FC<IItemGroupProviderProps> = ({prefix, translation, ...props}) => {
    return <ItemGroupContext.Provider
        value={{
            prefix,
            translation,
        }}
        {...props}
    />;
};
