import {
    IMobileFormItemContext,
    MobileFormItemContext
} from "@leight-core/viv";
import {
    FC,
    PropsWithChildren
} from "react";

export type IMobileFormItemProviderProps = PropsWithChildren<{
    context: IMobileFormItemContext;
}>;

export const MobileFormItemProvider: FC<IMobileFormItemProviderProps> = ({context, ...props}) => {
    return <MobileFormItemContext.Provider
        value={context}
        {...props}
    />;
};
