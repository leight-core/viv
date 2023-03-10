import {
    $JobProgressService,
    $JobSource,
    type IJob,
    type IJobExecutor,
    type IJobProgressService,
    type IJobSource,
}               from "@leight/job";
import {
    $UserService,
    type IUserService
}               from "@leight/user";
import {Pack}   from "@leight/utils";
import {Logger} from "@leight/winston";
import delay    from "delay";
import "reflect-metadata";
import {
    inject,
    injectable
}               from "tsyringe";

@injectable()
export class JobExecutor implements IJobExecutor {
    constructor(
        @inject($JobProgressService) protected jobProgressService: IJobProgressService,
        @inject($UserService) protected userService: IUserService,
        @inject($JobSource) protected jobSource: IJobSource,
    ) {
    }

    async execute<TJob extends IJob>(
        {
            name,
            handler,
            params
        }: IJobExecutor.ExecuteProps<TJob>): Promise<TJob> {
        let logger        = Logger(name);
        const job         = await this.jobSource.create({
            created: new Date(),
            name,
            userId:  this.userService.required(),
            params:  await Pack.pack(params),
        }) as TJob;
        const labels      = {name, jobId: job.id};
        logger            = logger.child({labels, jobId: labels.jobId, name});
        const jobProgress = this.jobProgressService.create(job.id);
        setTimeout(() => {
            (async () => {
                try {
                    await this.jobSource.find(job.id);
                    await jobProgress.setStatus("RUNNING");
                    await handler({
                        name,
                        job,
                        params,
                        userId:   this.userService.required(),
                        jobProgress,
                        logger,
                        progress: async (callback, $sleep = 0) => {
                            try {
                                await delay($sleep);
                                const result = await callback();
                                await jobProgress.onSuccess();
                                return result;
                            } catch (e) {
                                await jobProgress.onFailure();
                                if (e instanceof Error) {
                                    logger.error(e.message);
                                    logger.error(e.stack);
                                }
                                throw e;
                            }
                        },
                    });
                    await jobProgress.setStatus(jobProgress.result() || (jobProgress.isReview() ? "REVIEW" : "SUCCESS"));
                } catch (e) {
                    logger.error(`Job [${name}] failed.`);
                    if (e instanceof Error) {
                        logger.error(e.message);
                        logger.error(e.stack);
                    }
                    await jobProgress.setStatus("FAILURE");
                    throw e;
                }
            })();
        }, 0);
        return job;
    }
}
