import {IVisibleContext} from "@leight-core/api";
import {VisibleContext}  from "@leight-core/client";
import {isCallable}      from "@leight-core/utils";
import {
	FC,
	ReactNode,
	useState
}                        from "react";

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
		{isCallable(children) ? <VisibleContext.Consumer>{children as any}</VisibleContext.Consumer> : children as ReactNode}
	</VisibleContext.Provider>;
};
