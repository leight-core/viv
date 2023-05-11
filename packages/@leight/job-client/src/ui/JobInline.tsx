import {type IWithTranslation} from "@leight/i18n";
import {Translation}           from "@leight/i18n-client";
import {
    type IJobSourceSchema,
    JobDoneStatus,
    type JobSource
}                              from "@leight/job";
import {type ISource}          from "@leight/source";
import {toHumanNumber}         from "@leight/utils";
import {Progress}              from "@mantine/core";
import {notifications}         from "@mantine/notifications";
import {
    IconAlertTriangle,
    IconCheck,
    IconExclamationCircle
}                              from "@tabler/icons-react";
import {
    type FC,
    useState
}                              from "react";

export interface IJobInlineInternalProps {
    withTranslation: IWithTranslation;
    job: JobSource["Type"]["Dto"];
    useJobGetQuery: ISource.IUseRepository<IJobSourceSchema>["useGet"];

    onSuccess?(props: IJobInlineInternalProps.IOnSuccessProps): void;
}

export namespace IJobInlineInternalProps {
    export interface IOnSuccessProps {
        job: JobSource["Type"]["Dto"];
    }
}

export type IJobInlineProps = Omit<IJobInlineInternalProps, "useJobGetQuery">;

export const JobInline: FC<IJobInlineInternalProps> = (
    {
        job,
        useJobGetQuery,
        onSuccess,
        withTranslation,
    }) => {
    const [refresh, setRefresh] = useState(true);
    const notificationId = `job-${job.id}`;
    const result = useJobGetQuery({id: job.id}, {
        initialData:     job,
        refetchInterval: refresh ? 750 : undefined,
        onSuccess:       job => {
            const isDone = JobDoneStatus.includes(job.status);
            isDone && setTimeout(() => {
                switch (job.status) {
                    case "SUCCESS":
                        onSuccess?.({job});
                        notifications.update({
                            id:      notificationId,
                            icon:    <IconCheck size={"1.1rem"}/>,
                            color:   "teal",
                            title:   <Translation {...withTranslation} withLabel={"success.title"}/>,
                            message: <Translation {...withTranslation} withLabel={"success.message"}/>,
                        });
                        break;
                    case "REVIEW":
                        notifications.update({
                            id:        notificationId,
                            icon:      <IconAlertTriangle size={"1.1rem"}/>,
                            color:     "orange",
                            title:     <Translation {...withTranslation} withLabel={"review.title"}/>,
                            message:   <Translation {...withTranslation} withLabel={"review.message"}/>,
                            autoClose: false,
                        });
                        break;
                    case "FAILURE":
                        notifications.update({
                            id:        notificationId,
                            icon:      <IconExclamationCircle size={"1.1rem"}/>,
                            color:     "red",
                            title:     <Translation {...withTranslation} withLabel={"failure.title"}/>,
                            message:   <Translation {...withTranslation} withLabel={"failure.message"}/>,
                            autoClose: false,
                        });
                        break;
                }
            }, 750);
            setRefresh(!isDone);
        }
    });

    return result.isSuccess ? <>
        <Progress
            color={"green"}
            striped
            animate
            value={result.data.progress}
        />
        {toHumanNumber({number: result.data.progress})}%
    </> : null;
};
