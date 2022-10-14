import {
    IMobileFormItemContext,
    IProviderChildren,
    MobileFormItemContext,
    withProviderChildren
}           from "@leight-core/viv";
import {FC} from "react";

export interface IMobileFormItemProviderProps {
    context: IMobileFormItemContext;
    children?: IProviderChildren<IMobileFormItemContext>;
}

export const MobileFormItemProvider: FC<IMobileFormItemProviderProps> = ({context, children}) => {
    return <MobileFormItemContext.Provider
        value={context}
    >
        {withProviderChildren(children, MobileFormItemContext)}
    </MobileFormItemContext.Provider>;
};
