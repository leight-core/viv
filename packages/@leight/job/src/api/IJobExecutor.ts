import {type ILogger}          from "@leight/winston";
import {type IJobProgress}     from "./IJobProgress";
import {type IJobSourceConfig} from "./IJobSourceConfig";

export interface IJobExecutor {
    execute<TJob extends IJobSourceConfig["Entity"]>(props: IJobExecutor.ExecuteProps<TJob>): Promise<TJob>;
}

export namespace IJobExecutor {
    export interface ExecuteProps<TJob extends IJobSourceConfig["Entity"]> {
        name: string;
        params: any;
        handler: (request: HandlerRequest<TJob>) => Promise<any>;
    }

    export interface HandlerRequest<TJob extends IJobSourceConfig["Entity"]> {
        name: string;
        job: TJob;
        params: any;
        userId?: string | null;
        jobProgress: IJobProgress;
        logger: ILogger;

        progress<TResult>(callback: () => Promise<TResult>, sleep?: number): Promise<TResult | void>;
    }
}

export const $JobExecutor = Symbol.for(
    "@leight/job-server/JobExecutor"
);
