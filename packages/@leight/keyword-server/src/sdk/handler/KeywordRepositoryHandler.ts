/**
	This is a file generated by MCP (managed code pattern) approach.
    
    So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {withRepositoryHandler} from "@leight/trpc-source-server";
import {
	$KeywordRepositoryService,
	type KeywordSource
} from "@leight/keyword";

export const KeywordRepositoryHandler = withRepositoryHandler<KeywordSource["Schema"]["Service"]>({
    service: $KeywordRepositoryService,
});
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_njlwg961ojlmpgdb3gykb36g = true;