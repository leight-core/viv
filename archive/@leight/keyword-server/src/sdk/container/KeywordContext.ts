/**
	This is a file generated by MCP (managed code pattern) approach.

    So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {type IContainer} from "@leight/container";
import {ServiceContext}  from "@leight/container-server";
import {
    $KeywordRepository,
    $KeywordRepositoryMapper,
    $KeywordRepositoryService,
    type IKeywordRepository,
    type IKeywordRepositoryMapper,
    type IKeywordRepositoryService
}                        from "@leight/keyword";

export const KeywordRepositoryContext = (container: IContainer) => new ServiceContext<IKeywordRepository>(container, $KeywordRepository);
export const KeywordRepositoryMapperContext = (container: IContainer) => new ServiceContext<IKeywordRepositoryMapper>(container, $KeywordRepositoryMapper);
export const KeywordRepositoryServiceContext = (container: IContainer) => new ServiceContext<IKeywordRepositoryService>(container, $KeywordRepositoryService);
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_dew1gbusgrieykzlywq5t06k = true;
