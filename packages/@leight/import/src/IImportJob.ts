import {type IJobSourceConfig} from "@leight/job";

export interface IImportJobParams {
    fileId: string;
}

export type IImportJob = IJobSourceConfig['Entity'];
