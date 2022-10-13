import {
    DayjsContext,
    IDayJsContext,
    IProviderChildren,
    withProviderChildren
} from "@leight-core/viv";
import {
    FC,
    useRef
} from "react";

export interface IDayjsProviderProps {
    dayjs: any;
    children?: IProviderChildren<IDayJsContext>;
}

export const DayjsProvider: FC<IDayjsProviderProps> = ({dayjs, children}) => {
    const context = useRef<IDayJsContext>({
        dayjs,
    });
    return <DayjsContext.Provider
        value={context.current}
    >
        {withProviderChildren(children, DayjsContext)}
    </DayjsContext.Provider>;
};
