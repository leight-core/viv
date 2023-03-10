import {
    EntitySchema,
    type ISource,
    type ISourceSchema
}                     from "@leight/source";
import {type ILogger} from "@leight/winston";
import {z}            from "zod";

export const JobStatusSchema = z.enum([
    // Just created, nobody cares about the job yet
    "NEW",
    // Job has been picked up and is in progress.
    "RUNNING",
    // Job has been successfully done; waiting for "commit".
    "SUCCESS",
    // Job has failed hard (usually outside boundaries of the job handler)
    "FAILURE",
    //  Job has been processed, but there are some failed items
    "REVIEW",
    //  When everything is OK, it's done: goes from review->done and failure->done
    "DONE"
] as const);

export type IJobStatusSchema = typeof JobStatusSchema;

export type IJobStatus = z.infer<IJobStatusSchema>;

export interface IJobProgress {
    readonly jobId: string;

    result(): IJobStatus | undefined;

    success(): number;

    failure(): number;

    skip(): number;

    setTotal(total: number): Promise<unknown>;

    setStatus(status: IJobStatus): Promise<unknown>;

    onSuccess(): Promise<unknown>;

    onFailure(): Promise<unknown>;

    onSkip(): Promise<unknown>;

    setResult(result: IJobStatus): void;

    isReview(): boolean;
}

export interface IJobProgressService {
    create(jobId: string): IJobProgress;
}

export const $JobProgressService = Symbol.for(
    "@leight/job-server/JobProgressService"
);

export const $JobExecutor = Symbol.for(
    "@leight/job-server/JobExecutor"
);

export const JobSchema = z.object({}).merge(EntitySchema);

export type IJobSchema = typeof JobSchema;

export type IJob = z.infer<IJobSchema>;

export interface IJobSourceSchema extends ISourceSchema<
    IJobSchema
> {
}

export interface IJobSource extends ISource<IJobSourceSchema> {
}

export const $JobSource = Symbol.for("@leight/job/JobSource");

export interface IJobExecutor {
    execute<TJob extends IJob>(props: IJobExecutor.ExecuteProps<TJob>): Promise<TJob>;
}

export namespace IJobExecutor {
    export interface ExecuteProps<TJob extends IJob> {
        name: string;
        params: any;
        handler: (request: HandlerRequest<TJob>) => Promise<any>;
    }

    export interface HandlerRequest<TJob extends IJob> {
        name: string;
        job: TJob;
        params: any;
        userId?: string | null;
        jobProgress: IJobProgress;
        logger: ILogger;

        progress<TResult>(callback: () => Promise<TResult>, sleep?: number): Promise<TResult | void>;
    }
}
