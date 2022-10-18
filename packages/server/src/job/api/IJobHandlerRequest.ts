import {IJobProgress} from "@leight/server";
import {IJob}         from "@leight/shared";
import {Logger}       from "winston";

export interface IJobHandlerRequest<TParams> {
    name: string;
    job: IJob<TParams>;
    params: TParams;
    userId?: string | null;
    jobProgress: IJobProgress;
    logger: Logger;

    progress<TResult>(callback: () => Promise<TResult>, sleep?: number): Promise<TResult | void>;
}
