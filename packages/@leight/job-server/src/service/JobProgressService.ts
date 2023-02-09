import {
    type IJobProgress,
    type IJobProgressService,
    type IJobStatus
}                  from "@leight/job";
import {
    $PrismaClient,
    type IPrismaClient
}                  from "@leight/prisma";
import {toPercent} from "@leight/utils";
import "reflect-metadata";
import {
    inject,
    injectable
}                  from "tsyringe";

@injectable()
export class JobProgressService implements IJobProgressService {
    constructor(
        @inject($PrismaClient) protected prismaClient: IPrismaClient,
    ) {
    }

    create(jobId: string): IJobProgress {
        let $result: IJobStatus | undefined;
        let $total     = 0;
        let $processed = 0;
        let $success   = 0;
        let $failure   = 0;
        let $skip      = 0;

        return {
            jobId,
            result:    () => $result,
            success:   () => $success,
            failure:   () => $failure,
            skip:      () => $skip,
            setTotal:  total => this.prismaClient.job.update({
                data:  {
                    total: ($total = total),
                },
                where: {
                    id: jobId,
                }
            }),
            setStatus: status => this.prismaClient.job.update({
                data:  {
                    status,
                    started:  ["RUNNING"].includes(status) ? new Date() : undefined,
                    finished: [
                                  "REVIEW",
                                  "SUCCESS",
                                  "FAILURE"
                              ].includes(status) ? new Date() : (["RUNNING"].includes(status) ? null : undefined),
                },
                where: {
                    id: jobId,
                },
            }),
            onSuccess: () => this.prismaClient.job.update({
                data:  {
                    success:      ++$success,
                    successRatio: toPercent($success, $total),
                    progress:     toPercent(++$processed, $total),
                },
                where: {
                    id: jobId,
                }
            }),
            onFailure: () => this.prismaClient.job.update({
                data:  {
                    failure:      ++$failure,
                    failureRatio: toPercent($failure, $total),
                    progress:     toPercent(++$processed, $total),
                },
                where: {
                    id: jobId,
                }
            }),
            onSkip:    () => this.prismaClient.job.update({
                data:  {
                    skip:      ++$skip,
                    skipRatio: toPercent($skip, $total),
                    progress:  toPercent(++$processed, $total),
                },
                where: {
                    id: jobId,
                }
            }),
            setResult: result => {
                $result = result;
            },
            isReview:  () => $failure > 0 || $skip > 0,
        };
    }
}
