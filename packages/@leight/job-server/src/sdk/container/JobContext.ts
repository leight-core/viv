/**
	This is a file generated by MCP (managed code pattern) approach.
    
    So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {type IContainer} from "@leight/container";
import {ServiceContext} from "@leight/container-server";
import {
	type IJobRepository,
	type IJobRepositoryService,
	type IJobRepositoryMapper,
	$JobRepository,
	$JobRepositoryMapper,
	$JobRepositoryService
} from "@leight/job";

export const JobRepositoryContext = (container: IContainer) => new ServiceContext<IJobRepository>(container, $JobRepository);
export const JobRepositoryMapperContext = (container: IContainer) => new ServiceContext<IJobRepositoryMapper>(container, $JobRepositoryMapper);
export const JobRepositoryServiceContext = (container: IContainer) => new ServiceContext<IJobRepositoryService>(container, $JobRepositoryService);
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_zpanwb9kuief4vmxwecbtw4m = true;