import {ITranslationProps}     from "@leight-core/api";
import {Translate}             from "@leight-core/client";
import {Typography}            from "antd";
import {Dialog}                from "antd-mobile";
import {ExclamationCircleFill} from "antd-mobile-icons";

export interface IDeleteConfirmDialogProps {
	translation: ITranslationProps;

	onClose?(): void;

	onCancel?(): void;

	onConfirm(): void;
}

export const DeleteConfirmDialog = (
	{
		translation,
		onClose,
		onCancel,
		onConfirm,
	}: IDeleteConfirmDialogProps) => {
	return Dialog.confirm({
		header:      (
						 <ExclamationCircleFill
							 style={{
								 fontSize: 48,
								 color:    "var(--adm-color-warning)",
							 }}
						 />
					 ),
		title:       <Translate {...translation} text={"delete.title"}/>,
		content:     <Translate {...translation} text={"delete.content"}/>,
		cancelText:  <Translate namespace={"common"} text={"cancel"}/>,
		confirmText: <Typography.Text type={"danger"}>
						 <Translate namespace={"common"} text={"delete"}/>
					 </Typography.Text>,
		onClose,
		onCancel,
		onConfirm,
	});
};
