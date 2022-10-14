import {MenuSelectionContext} from "@leight-core/viv";
import {
    FC,
    PropsWithChildren,
    useEffect,
    useMemo,
    useState
}                             from "react";

export type IMenuSelectionProviderProps = PropsWithChildren<{
    defaultSelection?: string[];
}>;

export const MenuSelectionProvider: FC<IMenuSelectionProviderProps> = ({defaultSelection = [], ...props}) => {
    const [selection, setSelection] = useState<string[]>(defaultSelection);
    return <MenuSelectionContext.Provider
        value={useMemo(() => ({
            selection,
            useSelection: selection => {
                useEffect(() => {
                    const id = setTimeout(() => setSelection(selection), 0);
                    return () => clearTimeout(id);
                }, selection);
            }
        }), [])}
        {...props}
    />;
};
