"use client";

import {Translation} from "@leight/i18n";
import {
    Button,
    Divider,
    Group
}                    from "@mantine/core";
import {IconTrash}   from "@tabler/icons-react";
import {ModalStore}  from "../store/ModalStore";
import {
    IModalProps,
    Modal
}                    from "./Modal";

export interface IDeleteModalProps extends IModalProps {
}

export const DeleteModal = (
    {
        withTranslation,
        ...props
    }: IDeleteModalProps) => {
    const {close} = ModalStore.use(({close}) => ({close}));
    // const deleteMutation = Source.repository.useDelete();
    // const invalidator = Source.useInvalidator();
    return <Modal
        withTranslation={{
            ...withTranslation,
            label: withTranslation?.label ? `${withTranslation.label}.delete` : "delete",
        }}
        // closeOnClickOutside={!deleteMutation.isLoading}
        title={"title"}
        {...props}
    >
        <Divider mb={"sm"}/>
        <Translation {...withTranslation} withLabel={"delete.content"}/>
        <Divider mt={"sm"} mb={"sm"}/>
        <Group position={"apart"}>
            <Button
                size={"md"}
                color={"blue"}
                variant={"outline"}
                // disabled={deleteMutation.isLoading}
                onClick={() => close(props.modalId)}
            >
                <Translation namespace={"common"} label={"cancel.button"}/>
            </Button>
            <Button
                size={"lg"}
                color={"red"}
                leftIcon={<IconTrash/>}
                // loading={deleteMutation.isLoading}
                onClick={() => {
                    console.error("Not implemented yet :(");
                    // deleteMutation.mutate({
                    // 	id: entity.id,
                    // }, {
                    // 	onSuccess: (dto) => {
                    // 		invalidator();
                    // 		withSuccessNotification({
                    // 			withTranslation: {
                    // 				...withTranslation,
                    // 				label:  withTranslation?.label ? `${withTranslation.label}.delete` : "delete",
                    // 				values: dto,
                    // 			}
                    // 		});
                    // 	},
                    // 	onSettled: () => close(props.modalId),
                    // });
                }}
            >
                <Translation {...withTranslation} withLabel={"delete.confirm.button"}/>
            </Button>
        </Group>
    </Modal>;
};
