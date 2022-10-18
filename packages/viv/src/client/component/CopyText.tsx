import {Typography}     from "antd";
import {
    FC,
    PropsWithChildren
}                       from "react";
import {useTranslation} from "react-i18next";

export type ICopyTextProps = PropsWithChildren<{
    copy: string;
    /**
     * Translation label for copy tooltips
     */
    tooltip: string;
}>;

export const CopyText: FC<ICopyTextProps> = ({tooltip, copy, ...props}) => {
    const {t} = useTranslation();
    return <Typography.Text
        copyable={{
            text:     copy,
            tooltips: [
                t(tooltip + ".copy"),
                t(tooltip + ".copied")
            ]
        }}
        {...props}
    />;
};
