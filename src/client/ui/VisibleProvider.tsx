import {
    IProviderChildren,
    IVisibleContext,
    VisibleContext,
    withProviderChildren
} from "@leight-core/viv";
import {
    FC,
    useState
} from "react";

export interface IVisibleProviderProps {
    defaultVisible?: boolean;
    children?: IProviderChildren<IVisibleContext>;
}

export const VisibleProvider: FC<IVisibleProviderProps> = ({defaultVisible = false, children}) => {
    const [visible, setVisible] = useState<boolean>(defaultVisible);
    return <VisibleContext.Provider
        value={{
            visible,
            setVisible,
            show: () => setVisible(true),
            hide: () => setVisible(false),
        }}
    >
        {withProviderChildren(children, VisibleContext)}
    </VisibleContext.Provider>;
};
