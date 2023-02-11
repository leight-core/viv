import {ITranslationProps} from "@leight-core/api";
import {
	Button,
	ButtonProps,
	Tooltip
}                          from "antd";
import {
	ComponentProps,
	FC,
	ReactNode
}                          from "react";
import {Translate}         from "../translation/Translate";
import {
	VisibleContext,
	VisibleProvider
}                          from "../ui";
import {UseToken}          from "../user/UseToken";
import {
	Drawer,
	IDrawerProps
}                          from "./Drawer";

export interface IDrawerButtonProps extends Partial<Omit<ButtonProps, "title">> {
	label?: ReactNode | string;
	translation?: ITranslationProps;
	tooltip?: string;
	width?: string | number;
	drawerProps?: IDrawerProps;
	tokens?: ComponentProps<typeof UseToken>["tokens"];
}

/**
 * Default Antd button without any preset; just the drawer is shown on click.
 */
export const DrawerButton: FC<IDrawerButtonProps> = (
	{
		children,
		onClick,
		label,
		translation,
		tooltip,
		width = 600,
		drawerProps,
		tokens,
		...props
	}) => {
	return <Tooltip title={tooltip ? <Translate {...translation} text={tooltip}/> : undefined}>
		<VisibleProvider>
			<VisibleContext.Consumer>
				{visibleContext => <>
					<Drawer
						translation={translation}
						width={width}
						{...drawerProps}
					>
						{children}
					</Drawer>
					<UseToken tokens={tokens}>
						<Button
							onClick={event => {
								visibleContext.show();
								onClick?.(event as any);
							}}
							{...props}
						>
							<span>
								<Translate
									{...translation}
									text={label}
								/>
							</span>
						</Button>
					</UseToken>
				</>}
			</VisibleContext.Consumer>
		</VisibleProvider>
	</Tooltip>;
};
