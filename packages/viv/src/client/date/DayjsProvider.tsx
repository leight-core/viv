import {
    DayjsContext,
    IDayJsContext,
    IProviderChildren,
    withProviderChildren
} from "@leight/viv";
import {
    FC,
    useMemo
} from "react";

export interface IDayjsProviderProps {
    dayjs: any;
    children?: IProviderChildren<IDayJsContext>;
}

export const DayjsProvider: FC<IDayjsProviderProps> = ({dayjs, children}) => {
    const context = useMemo<IDayJsContext>(() => ({
        dayjs,
    }), []);
    return <DayjsContext.Provider
        value={context}
    >
        {withProviderChildren(children, DayjsContext)}
    </DayjsContext.Provider>;
};
