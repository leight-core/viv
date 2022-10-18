import {LoaderIcon}     from "@leight/viv";
import {Result}         from "antd";
import {
    FC,
    PropsWithChildren,
    ReactNode
}                       from "react";
import {useTranslation} from "react-i18next";

export type ILoaderProps = PropsWithChildren<{
    icon: ReactNode;
    loading: boolean;
    error: boolean;
    errorText?: string;
}>;

export const Loader: FC<ILoaderProps> = ({icon, loading, error, errorText, children}) => {
    const {t} = useTranslation();

    return <>
        {loading && !error && <Result
            icon={<LoaderIcon/>}
        />}
        {error && <Result
            icon={icon}
            status={"error"}
            title={errorText ? t(errorText) : null}
        />}
        {!loading && !error && children}
    </>;
};
