import {IContainer} from "@leight/server";
import {
    IFile,
    IQueryParams
}                   from "@leight/shared";

export type IChunkCommitEvent = <//
    TContainer extends IContainer,
    TRequest,
    TResponse,
    TQuery extends IQueryParams = any,
    >(file: IFile, params: IEndpointRequest<TContainer, TRequest, TResponse, TQuery>) => Promise<IFile>;
