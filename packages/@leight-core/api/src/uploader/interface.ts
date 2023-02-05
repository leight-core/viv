import {type UploadFile} from "antd/lib/upload/interface";
import {type IEventHandlers, type IEventResult, type IEvents} from "../event";

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
	done: IOnUploaderDone<TResponse>;

	uploading(file: UploadFile): IEventResult;

	error(file: UploadFile): IEventResult;
}

export interface IUploaderEvents<TResponse = void> extends IEvents<IUploaderEventTypes, IUploaderEventHandlers<TResponse>> {
}
