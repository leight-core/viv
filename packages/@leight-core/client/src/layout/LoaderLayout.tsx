import {AntDesignOutlined} from "@ant-design/icons";
import {Card, Col, Divider, Layout, LayoutProps, Result, Row, Typography} from "antd";
import {ReactNode} from "react";
import {useTranslation} from "react-i18next";
import {Centered} from "./Centered";
import {LoaderIcon} from "../icon";
import {isCallable} from "@leight/utils";

export interface ILoaderLayoutProps<TResult = any> extends Partial<Omit<LayoutProps, "children">> {
	logo?: ReactNode;
	icon?: ReactNode;
	result?: TResult;
	loading: boolean;
	isError?: boolean;
	errorText?: string;
	children?: ReactNode | ((result: TResult) => ReactNode);
}

export const LoaderLayout = <TResult, >(
	{
		logo,
		icon,
		result,
		errorText,
		loading,
		isError = false,
		children,
		...props
	}: ILoaderLayoutProps<TResult>) => {
	const {t} = useTranslation();
	return <>
		{(loading || isError) && <Layout style={{height: "100vh"}} {...props}>
			<Row justify={"center"} align={"middle"}>
				<Col span={24}>
					<Card
						title={logo || <AntDesignOutlined/>}
						headStyle={{textAlign: "center", padding: "2em 0"}}
					>
						<Centered>
							{loading && !isError && <Result
								icon={<LoaderIcon/>}
							/>}
							{isError && <Result
								icon={icon}
								status={"error"}
								title={errorText ? t(errorText) : null}
							/>}
						</Centered>
						<Divider/>
						<Centered>
							<Typography.Text type={"secondary"}>v[{process.env.NEXT_PUBLIC_VERSION}]</Typography.Text>
						</Centered>
					</Card>
				</Col>
			</Row>
		</Layout>}
		{!loading && !isError && (isCallable(children) ? (children)(result as TResult) : children)}
	</>;
};
