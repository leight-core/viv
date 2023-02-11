import {FC} from "react";

export interface IPlainTextProps {
	children?: string | null;
}

export const PlainText: FC<IPlainTextProps> = ({children}) => {
	return <div style={{whiteSpace: "pre-wrap"}}>
		{children}
	</div>;
};
