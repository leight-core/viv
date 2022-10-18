import {
    FormItemContext,
    IFormItemContext
} from "@leight/viv";
import {
    FC,
    PropsWithChildren
} from "react";

export type IFormItemProviderProps = PropsWithChildren<{
    context: IFormItemContext;
}>;

export const FormItemProvider: FC<IFormItemProviderProps> = ({context, ...props}) => {
    return <FormItemContext.Provider
        value={context}
        {...props}
    />;
};
