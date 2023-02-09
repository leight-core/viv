import {useLoopStore} from "@leight/utils-client";
import {type FC}      from "react";

export interface IUploadControlsProps {
}

export const UploadControls: FC<IUploadControlsProps> = () => {
    const {isRunning} = useLoopStore();
    return <>{isRunning ? "actions" : "done"}</>;
};
