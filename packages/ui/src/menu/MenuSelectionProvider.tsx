import {
    Context,
    IMenuSelectionContext,
    IProviderChildren,
    MenuSelectionContext
}                from "@leight/ui";
import {
    FC,
    useEffect,
    useState
}                from "react";
import {useMemo} from "use-memo-one";

export interface IMenuSelectionProviderProps {
    defaultSelection?: string[];
    children?: IProviderChildren<IMenuSelectionContext>;
}

export const MenuSelectionProvider: FC<IMenuSelectionProviderProps> = ({defaultSelection = [], children}) => {
    const [selection, setSelection] = useState<string[]>(defaultSelection);
    return <MenuSelectionContext.Provider
        value={useMemo(() => ({
            get selection() {
                return selection;
            },
            useSelection: selection => {
                useEffect(() => {
                    const id = setTimeout(() => setSelection(selection), 0);
                    return () => clearTimeout(id);
                }, selection);
            }
        }), [])}
    >
        {Context.render(children, MenuSelectionContext)}
    </MenuSelectionContext.Provider>;
};
