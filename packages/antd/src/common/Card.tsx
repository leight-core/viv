import {Translate}        from "@leight/ui";
import {Card as CoolCard} from "antd";
import {
    ComponentProps,
    FC
}                         from "react";

export interface ICardProps extends Partial<ComponentProps<typeof CoolCard>> {
}

export const Card: FC<ICardProps> = ({title, ...props}) => {
    return <CoolCard
        title={<Translate text={title}/>}
        bordered={false}
        {...props}
    />;
};
