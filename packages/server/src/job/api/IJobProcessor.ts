import {
    IContainer,
    IEndpointRequest,
    IJobHandlerRequest
}                        from "@leight/server";
import {IJob}            from "@leight/shared";
import {QueueAddOptions} from "p-queue/dist/options";

export interface IJobProcessor<TParams = any> {
    request<TContainer extends IContainer>(params: IEndpointRequest<TContainer, TParams, IJob<TParams>>, queue?: QueueAddOptions): Promise<IJob<TParams>>;

    async(params: TParams, userId?: string | null, queue?: QueueAddOptions): Promise<IJob<TParams>>;

    handler(request: IJobHandlerRequest<TParams>): Promise<any>;
}
