import {
    Context,
    DayjsContext,
    IDayJsContext,
    IProviderChildren
} from "@leight/ui";
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
        {Context.render(children, DayjsContext)}
    </DayjsContext.Provider>;
};
