import {Divider} from "antd";
import {FC}      from "react";
import {
    ITemplateProps,
    Template
}                from "./Template";

export interface ICreateTemplateProps extends ITemplateProps {
}

export const CreateTemplate: FC<ICreateTemplateProps> = ({label, children, ...props}) => {
    return <Template
        label={label ? label + ".create" : label}
        {...props}
    >
        {children ? <>
            <Divider/>
            {children}
        </> : children}
    </Template>;
};
