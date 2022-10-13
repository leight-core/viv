import {FC} from "react";
import {
    ITemplateProps,
    Template
}           from "./Template";

export interface IPreviewTemplateProps extends ITemplateProps {
}

export const PreviewTemplate: FC<IPreviewTemplateProps> = ({label, ...props}) => {
    return <Template
        label={label ? label + ".preview" : label}
        {...props}
    />;
};
