import {IBootstrapConfig} from "@leight/viv";
import axios              from "axios";
import axiosRetry         from "axios-retry";
import {Router}           from "next/router";
import NProgress          from "nprogress";
import {useEffect}        from "react";
import {bootstrapLocale}  from "./bootstrapLocale";

export const bootstrap = async (): Promise<IBootstrapConfig> => {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());

    axios.defaults.timeout = 1000 * 60;

    axiosRetry(axios, {
        retries:    3,
        retryDelay: axiosRetry.exponentialDelay,
    });

    return {
        locale: await bootstrapLocale(),
    };
};

export const useBootstrap = (setBootstrapConfig: (config: IBootstrapConfig) => void) => {
    useEffect(() => {
        (async () => setBootstrapConfig(await bootstrap()))();
    }, []);
};
