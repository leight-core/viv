/**
	This is a file generated by MCP (managed code pattern) approach.

    So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {
    $KeywordRepositoryService,
    type KeywordSource
}                              from "@leight/keyword";
import {withRepositoryHandler} from "@leight/trpc-source-server";

export const KeywordRepositoryHandler = withRepositoryHandler<KeywordSource["Schema"]["Service"]>({
    service: $KeywordRepositoryService,
});
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_io1uasfojo7y8hv4q1vnsho9 = true;