import {
	FC,
	ReactNode
} from "react";

export interface IPageWithLayout<P> extends FC<P> {
	layout(page: ReactNode): ReactNode;
}
