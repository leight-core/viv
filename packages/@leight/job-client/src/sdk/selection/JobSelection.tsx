/**
	This is a file generated by MCP (managed code pattern) approach.
    
    So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {createSelectionStore} from "@leight/selection-client";
import {type IStoreContext} from "@leight/context";
import {type ISelectionStoreProps} from "@leight/selection";
import {type IJobSourceType as SourceType} from "@leight/job";

export type IJobSelectionStore = IStoreContext<ISelectionStoreProps<SourceType["Dto"]>>;

export const JobSelection = createSelectionStore<SourceType["Dto"]>({name: "Job"});
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_gybpcmg3ku9w9htma8j6e806 = true;