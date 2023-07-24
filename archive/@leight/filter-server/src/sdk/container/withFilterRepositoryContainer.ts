/**
	This is a file generated by MCP (managed code pattern) approach.

    So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {type IContainer}             from "@leight/container";
import {
    $FilterRepository,
    $FilterRepositoryMapper,
    $FilterRepositoryService
}                                    from "@leight/filter";
import {BaseFilterRepositoryMapper}  from "../mapper/BaseFilterRepositoryMapper";
import {BaseFilterRepositoryEx}      from "../repository/BaseFilterRepositoryEx";
import {BaseFilterRepositoryService} from "../service/BaseFilterRepositoryService";

export const withFilterRepositoryContainer = (container: IContainer) => {
    container.bindClass($FilterRepository, BaseFilterRepositoryEx);
    container.bindClass($FilterRepositoryMapper, BaseFilterRepositoryMapper);
    container.bindClass($FilterRepositoryService, BaseFilterRepositoryService);
};
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_v6afw89b8aq2tktib91zhpau = true;