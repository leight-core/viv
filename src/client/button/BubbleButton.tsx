import {FloatingBubble} from "antd-mobile";
import {MoreOutline}    from "antd-mobile-icons";
import {
	ComponentProps,
	FC,
	ReactNode
}                       from "react";

export interface IBubbleButtonProps extends Partial<ComponentProps<typeof FloatingBubble>> {
	icon?: ReactNode;
	initialPosition?: {
		topRight?: number;
		topLeft?: number;
		bottomRight?: number;
		bottomLeft?: number;
	};
}

export const BubbleButton: FC<IBubbleButtonProps> = ({initialPosition: {topRight, topLeft, bottomRight, bottomLeft} = {}, icon, ...props}) => {
	const defaultSize = "16px";

	const style = topRight ? {
		"--initial-position-top":   `${topRight}px`,
		"--initial-position-right": `${topRight}px`,
		"--edge-distance":          `${topRight}px`,
	} : topLeft ? {
		"--initial-position-top":  `${topLeft}px`,
		"--initial-position-left": `${topLeft}px`,
		"--edge-distance":         `${topLeft}px`,
	} : bottomRight ? {
		"--initial-position-bottom": `${bottomRight}px`,
		"--initial-position-right":  `${bottomRight}px`,
		"--edge-distance":           `${bottomRight}px`,
	} : bottomLeft ? {
		"--initial-position-bottom": `${bottomLeft}px`,
		"--initial-position-left":   `${bottomLeft}px`,
		"--edge-distance":           `${bottomLeft}px`,
	} : {
		"--initial-position-bottom": defaultSize,
		"--initial-position-right":  defaultSize,
		"--edge-distance":           defaultSize,
	};

	return <FloatingBubble
		axis="y"
		magnetic="x"
		style={style}
		{...props}
	>
		{icon || <MoreOutline fontSize={32}/>}
	</FloatingBubble>;
};
