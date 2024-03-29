/**
	This is a file generated by MCP (managed code pattern) approach.

    So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {type IStoreContext}                 from "@leight/context";
import {type IFileSourceType as SourceType} from "@leight/file";
import {type IMultiSelectionStoreProps}     from "@leight/selection";
import {createMultiSelectionStore}          from "@leight/selection-client";

export type IFileMultiSelectionStore = IStoreContext<IMultiSelectionStoreProps<SourceType["Dto"]>>;

export const FileMultiSelection = createMultiSelectionStore<SourceType["Dto"]>({name: "File"});
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_y6vkcvf5o5tebc6lakd9wckf = true;
