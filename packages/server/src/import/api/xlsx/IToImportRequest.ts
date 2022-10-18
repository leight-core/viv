import {
    IContainer,
    IJobProgress,
    ISource
}             from "@leight/server";
import {IJob} from "@leight/shared";
import xlsx   from "xlsx";

export interface IToImportRequest {
    container: IContainer;
    job: IJob<{ fileId: string }>;
    workbook: xlsx.WorkBook;
    jobProgress: IJobProgress;
    sources: ISource<any, any, any>[];
}
