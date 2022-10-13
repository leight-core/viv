import {
	BlockProvider,
	ScrollToTop,
	useBlockContext,
	useLayoutBlockContext,
	useMenuSelectionContext,
	useOptionalSiderCollapseContext
}                       from "@leight-core/client";
import {Spin}           from "antd";
import Head             from "next/head";
import {
	FC,
	PropsWithChildren,
	useEffect
}                       from "react";
import {useTranslation} from "react-i18next";

export type IEmptyPageProps = PropsWithChildren<{
	/**
	 * If provided, page title will be updated (tab name). Must be explicitly provided to change a title.
	 */
	title?: string;
	/**
	 * Page Tab (browser tab/window name) title.
	 *
	 * If complex translation is used, this should be used with simple text.
	 */
	tabTitle?: string;
	/**
	 * Should the sider be collapsed?
	 */
	collapsed?: boolean;
	/**
	 * Initial blocking state of a view; when true, view shows a loader.
	 *
	 * Defaults to `false`.
	 */
	blocked?: boolean;
	/**
	 * Selected menu items.
	 */
	menuSelection?: string[];
	values?: any;
}>;

const EmptyPageInternal: FC<PropsWithChildren<any>> = ({children}) => {
	const blockContext = useBlockContext();
	return <Spin spinning={blockContext.isBlocked()}>
		{children}
	</Spin>;
};

/**
 * Quite simple empty page without any additional features.
 */
export const EmptyPage: FC<IEmptyPageProps> = (
	{
		title,
		tabTitle,
		blocked = false,
		collapsed,
		menuSelection = [],
		values,
		...props
	}) => {
	const {t}          = useTranslation();
	const blockContext = useLayoutBlockContext();
	useMenuSelectionContext().useSelection(menuSelection);
	useOptionalSiderCollapseContext()?.useCollapse(collapsed, true);
	useEffect(() => {
		blockContext.unblock(true);
	}, []);
	tabTitle = tabTitle || (title ? `${title}.title` : undefined);
	return <>
		{tabTitle && <Head><title key={"title"}>{t(tabTitle, values)}</title></Head>}
		<ScrollToTop/>
		<BlockProvider locked={blocked}>
			<EmptyPageInternal {...props}/>
		</BlockProvider>
	</>;
};
