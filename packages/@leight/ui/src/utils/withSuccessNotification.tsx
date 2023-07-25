import {
    type IWithTranslation,
    Translation
}                  from "@leight/i18n";
import {
    type NotificationProps,
    notifications
}                  from "@mantine/notifications";
import {IconCheck} from "@tabler/icons-react";

export interface IWithSuccessNotificationProps extends Omit<NotificationProps, "title" | "message" | "color"> {
    withTranslation: IWithTranslation;
}

export const withSuccessNotification = (
    {
        withTranslation,
        ...props
    }: IWithSuccessNotificationProps) => {
    notifications.show({
        title:   <Translation {...withTranslation} withLabel={"success.title"}/>,
        message: <Translation {...withTranslation} withLabel={"success.message"}/>,
        icon:    <IconCheck size={"1.1rem"}/>,
        color:   "teal",
        ...props,
    });
};
