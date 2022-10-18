import {IJob} from "@leight/shared";

export namespace InferJob {
    export type Params<T> = T extends IJob<infer TParams> ? TParams : T;
}
