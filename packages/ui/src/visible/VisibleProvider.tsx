import {
    Context,
    IProviderChildren,
    IVisibleContext,
    VisibleContext,
}                from "@leight/ui";
import {
    FC,
    useState
}                from "react";
import {useMemo} from "use-memo-one";

export interface IVisibleProviderProps {
    defaultVisible?: boolean;
    children?: IProviderChildren<IVisibleContext>;
}

export const VisibleProvider: FC<IVisibleProviderProps> = ({defaultVisible = false, children}) => {
    const [visible, setVisible] = useState<boolean>(defaultVisible);
    return <VisibleContext.Provider
        value={useMemo(() => ({
            get visible() {
                return visible;
            },
            setVisible,
            show: () => setVisible(true),
            hide: () => setVisible(false),
        }), [])}
    >
        {Context.render(children, VisibleContext)}
    </VisibleContext.Provider>;
};
