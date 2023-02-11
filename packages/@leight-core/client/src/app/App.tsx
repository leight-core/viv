import {ITranslationsQuery}    from "@leight-core/api";
import {
	QueryClient,
	QueryClientProvider
}                              from "@tanstack/react-query";
import {i18n}                  from "i18next";
import {
	FC,
	PropsWithChildren,
	ReactNode
}                              from "react";
import {CookiesProvider}       from "react-cookie";
import {DayjsProvider}         from "../date";
import {I18NextProvider}       from "../i18n";
import {LayoutBlockProvider}   from "../layout";
import {MenuSelectionProvider} from "../menu";
import {
	IResponsiveProviderProps,
	ResponsiveProvider
}                              from "../responsive";
import {TranslationLoader}     from "../translation";

export type IAppProps = PropsWithChildren<{
	logo?: ReactNode;
	useTranslationQuery?: ITranslationsQuery;
	queryClient: QueryClient;
	dayjs: any;
	i18next: i18n;
	responsiveProviderProps?: IResponsiveProviderProps;
}>;

/**
 * Common default Application:
 *
 * - uses default server-side config loading (for discovery)
 * - uses server-side discovery by default
 * - uses server-side translations by default (with a setup of i18n)
 * - uses server-side default user login check
 */
export const App: FC<IAppProps> = (
	{
		logo,
		useTranslationQuery,
		dayjs,
		i18next,
		queryClient,
		responsiveProviderProps,
		...props
	}) => {
	return <QueryClientProvider client={queryClient}>
		<ResponsiveProvider {...responsiveProviderProps}>
			<DayjsProvider dayjs={dayjs}>
				<I18NextProvider i18next={i18next}>
					<CookiesProvider>
						<TranslationLoader useQuery={useTranslationQuery} logo={logo}>
							<MenuSelectionProvider>
								<LayoutBlockProvider {...props}/>
							</MenuSelectionProvider>
						</TranslationLoader>
					</CookiesProvider>
				</I18NextProvider>
			</DayjsProvider>
		</ResponsiveProvider>
	</QueryClientProvider>;
};