import {ITag}      from "@leight/shared";
import {Translate} from "@leight/ui";
import {
    Tag,
    TagProps,
    Typography
}                  from "antd";
import {FC}        from "react";

export interface ITagsProps extends Omit<Partial<TagProps>, "onClick"> {
    translation?: string;
    tags?: ITag[];
    color?: TagProps["color"];
    onClick?: (tag: ITag) => void;
}

export const Tags: FC<ITagsProps> = ({translation, onClick, color = "blue", tags = [], ...props}) => {
    return <>{
        tags.length ?
            tags.map(tag => <Tag
                style={{padding: "2px 6px", margin: "2px"}}
                key={`tag-${tag.id}`}
                color={color}
                onClick={() => {
                    onClick?.(tag);
                }}
                {...props}
            >
                {<Translate namespace={translation} text={`${tag.group}.${tag.tag}`}/>}
            </Tag>) : (translation ? <Typography.Text type={"secondary"}><Translate namespace={translation} text={"empty"}/></Typography.Text> : null)
    }</>;
};
