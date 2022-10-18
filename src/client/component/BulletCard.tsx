import {RightCircleOutlined} from "@ant-design/icons";
import {numbersOf}           from "@leight/viv";
import {
    Result,
    ResultProps,
    Typography
}                            from "antd";
import {
    FC,
    ReactNode
}                            from "react";
import {useTranslation}      from "react-i18next";

export interface IBulletCardProps extends ResultProps {
    /**
     * Title of the bullet card; uses translation.
     */
    title: string;
    /**
     * Number of bullets.
     */
    count: number;
    /**
     * Optional icon (used in Result under the hood).
     */
    icon: boolean | ReactNode;
    bullet?: () => ReactNode;
}

/**
 * Simple bullet card using "Result" component from Antd
 *
 * Props:
 *
 * - **title** goes through translator
 * - **count** is the number of bullets
 * - **icon** an icon to the Result component
 *
 * See:
 *
 * - https://ant.design/components/result/
 */
export const BulletCard: FC<IBulletCardProps> = (
    {
        title,
        count,
        icon = false,
        bullet = () => <RightCircleOutlined style={{color: "#1890ff"}}/>,
        ...props
    }) => {
    const {t} = useTranslation();
    return <Result
        icon={icon === false ? <></> : icon}
        title={t(title + ".title")}
        subTitle={t(title + ".subtitle")}
        style={{paddingTop: 0}}
        {...props}
    >
        {numbersOf(count).map(index => (
            <Typography.Paragraph key={index}>
                {bullet()}&nbsp;{t(title + ".list.item-" + index)}
            </Typography.Paragraph>
        ))}
    </Result>;
};
