import {Layout, Spin} from "antd";
import React, {CSSProperties, FC, PropsWithChildren, ReactNode, Suspense} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {useSiderCollapseContext} from "./SiderCollapseContext";
import {useLayoutBlockContext} from "./LayoutBlockContext";
import {LoaderIcon} from "../icon";
import {PlaceholderPage} from "../page";

type ILayoutSiderProps = PropsWithChildren<{
	sizeSize?: number;
}>;

const LayoutSider: FC<ILayoutSiderProps> = ({sizeSize = 235, ...props}) => {
	const siderCollapseContext = useSiderCollapseContext();
	return <Layout.Sider
		hidden={false}
		theme={"light"}
		collapsible
		onCollapse={siderCollapseContext.setCollapsed}
		collapsed={siderCollapseContext.collapsed}
		width={sizeSize}
		{...props}
	/>;
};

export type IHeaderSiderLayoutProps = PropsWithChildren<{
	/**
	 * Page (component layout) header.
	 */
	header: ReactNode;
	/**
	 * Page (component layout) footer.
	 */
	footer: ReactNode;
	menu?: ReactNode;
	/**
	 * Optional styling of layout content.
	 */
	contentStyle?: CSSProperties;
	/**
	 * Optional style for the header.
	 */
	headerStyle?: CSSProperties;
	siderSize?: number;
}>;

/**
 * Layout with a component header space, left-sided main menu and content. Packed with some interesting features.
 */
export const HeaderSiderLayout: FC<IHeaderSiderLayoutProps> = (
	{
		header,
		footer,
		siderSize,
		menu,
		headerStyle,
		contentStyle,
		...props
	}) => {
	const layoutBlockContext = useLayoutBlockContext();
	return <Layout>
		<Spin indicator={<LoaderIcon/>} spinning={layoutBlockContext.isBlocked()}>
			<BrowserView>
				{header && <Layout.Header style={{backgroundColor: "#fff", padding: 0, ...headerStyle}}>
					{header}
				</Layout.Header>}
				<Layout>
					<LayoutSider sizeSize={siderSize}>
						{menu}
					</LayoutSider>
					<Layout>
						<Layout.Content style={{minHeight: "100vh", padding: "1.5em", ...contentStyle}}>
							<Suspense fallback={<PlaceholderPage/>} {...props}/>
							{footer && <Layout.Footer>
								{footer}
							</Layout.Footer>}
						</Layout.Content>
					</Layout>
				</Layout>
			</BrowserView>
			<MobileView>
				<Layout>
					<Layout.Content style={{minHeight: "100vh", ...contentStyle}}>
						<Suspense fallback={<PlaceholderPage/>} {...props}/>
						{footer && <Layout.Footer>
							{footer}
						</Layout.Footer>}
					</Layout.Content>
				</Layout>
			</MobileView>
		</Spin>
	</Layout>;
};
