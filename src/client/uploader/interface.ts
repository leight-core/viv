import {
    IEventHandlers,
    IEventResult,
    IEvents
}                   from "@leight-core/viv";
import {UploadFile} from "antd/lib/upload/interface";

export type IUploaderEventTypes =
    "uploading"
    | "error"
    | "done";

/**
 * Crazy thing this one: we override response from UploadFile to enforce user defined
 * type - in an UploadFile the response is optional (we don't want this).
 */
export type IOnUploaderDone<TResponse = void> = (file: UploadFile<TResponse> & { response: TResponse }) => IEventResult;

export interface IUploaderEventHandlers<TResponse = void> extends IEventHandlers {
    uploading(file: UploadFile): IEventResult;

    error(file: UploadFile): IEventResult;

    done: IOnUploaderDone<TResponse>;
}

export interface IUploaderEvents<TResponse = void> extends IEvents<IUploaderEventTypes, IUploaderEventHandlers<TResponse>> {
}
