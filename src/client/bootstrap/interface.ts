import type {Locale} from "antd/lib/locale-provider";

export interface ILocaleConfig {
    readonly antd: Locale;
}

export interface IBootstrapConfig {
    readonly locale: ILocaleConfig,
}
