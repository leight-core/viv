import {
    type IWithTranslation,
    Translation
}                  from "@leight/i18n";
import {
    type NotificationProps,
    notifications
}                  from "@mantine/notifications";
import {IconCross} from "@tabler/icons-react";

export interface IWithErrorNotificationProps extends Omit<NotificationProps, "title" | "message" | "color"> {
    withTranslation: IWithTranslation;
}

export const withErrorNotification = (
    {
        withTranslation,
        ...props
    }: IWithErrorNotificationProps) => {
    notifications.show({
        title:   <Translation {...withTranslation} withLabel={"error.title"}/>,
        message: <Translation {...withTranslation} withLabel={"error.message"}/>,
        icon:    <IconCross size={"1.1rem"}/>,
        color:   "red",
        ...props,
    });
};
