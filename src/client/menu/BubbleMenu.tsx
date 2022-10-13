import {
	INavigate,
	Unboxed
}                    from "@leight-core/api";
import {
	BubbleButton,
	IBubbleButtonProps,
	Translate,
	useNavigate
}                    from "@leight-core/client";
import {ActionSheet} from "antd-mobile";
import {
	ComponentProps,
	FC,
	ReactNode,
	useState
}                    from "react";

export type IActionSheetProps = ComponentProps<typeof ActionSheet>;

export interface IBubbleMenuActionOnClickProps {
	setVisible(visible: boolean): void;

	navigate: INavigate;
}

export type IBubbleMenuAction =
	Omit<Unboxed<IActionSheetProps["actions"]>, "onClick" | "text">
	& {
		text?: ReactNode;
		onClick?(props: IBubbleMenuActionOnClickProps): void;
	}

export interface IBubbleMenuProps extends Partial<IBubbleButtonProps> {
	translation?: string;
	actions: IBubbleMenuAction[];
	actionSheetProps?: IActionSheetProps;
}

export const BubbleMenu: FC<IBubbleMenuProps> = ({translation, actionSheetProps, actions, ...props}) => {
	const [visible, setVisible] = useState(false);
	const navigate              = useNavigate();
	return <>
		<ActionSheet
			visible={visible}
			actions={actions.map(({text, onClick, ...action}) => ({
				...action,
				text:    text || <Translate text={translation ? translation + "." + action.key : action.key}/>,
				onClick: onClick ? () => {
					onClick({
						setVisible,
						navigate,
					});
				} : undefined,
			}))}
			onClose={() => setVisible(false)}
			{...actionSheetProps}
		/>
		<BubbleButton
			onClick={() => setVisible(true)}
			{...props}
		/>
	</>;
};
