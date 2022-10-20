import {
    LoaderIcon,
    Translate
}               from "@leight/ui";
import {Result} from "antd";
import {
    FC,
    PropsWithChildren,
    ReactNode
}               from "react";

export type ILoaderProps = PropsWithChildren<{
    icon: ReactNode;
    loading: boolean;
    error: boolean;
    errorText?: string;
}>;

export const Loader: FC<ILoaderProps> = ({icon, loading, error, errorText, children}) => {
    return <>
        {loading && !error && <Result
            icon={<LoaderIcon/>}
        />}
        {error && <Result
            icon={icon}
            status={"error"}
            title={<Translate text={errorText}/>}
        />}
        {!loading && !error && children}
    </>;
};
