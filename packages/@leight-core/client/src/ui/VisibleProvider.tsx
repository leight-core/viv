import {IVisibleContext} from "@leight-core/api";
import {isCallable}      from "@leight/utils";
import {
	FC,
	ReactNode,
	useState
}                        from "react";
import {VisibleContext}  from "./VisibleContext";

export interface IVisibleProviderProps {
	defaultVisible?: boolean;
	children?: ReactNode | ((visibleContext: IVisibleContext) => ReactNode);
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
		{isCallable(children) ? <VisibleContext.Consumer>{children}</VisibleContext.Consumer> : children}
	</VisibleContext.Provider>;
};