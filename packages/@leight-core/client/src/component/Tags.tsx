import {ITag} from "@leight-core/api";
import {Tag, TagProps, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ITagsProps extends Omit<Partial<TagProps>, "onClick"> {
	translation?: string;
	tags?: ITag[];
	color?: TagProps["color"];
	onClick?: (tag: ITag) => void;
}

export const Tags: FC<ITagsProps> = ({translation, onClick, color = "blue", tags = [], ...props}) => {
	const {t} = useTranslation();
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
				{translation ? t(`${translation}.${tag.group}.${tag.tag}`) : tag.tag}
			</Tag>) : (translation ?
				<Typography.Text type={"secondary"}>{t(`${translation}.empty`)}</Typography.Text> : null)
	}</>;
};
