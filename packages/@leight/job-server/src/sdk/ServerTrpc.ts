/**
 This is a file generated by MCP (managed code pattern) approach.

 So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {
    $JobSource,
    type IJobSourceSchema,
    JobQuerySchema
}                            from "@leight/job";
import {withSourceProcedure} from "@leight/trpc-source-server";

export const JobSourceProcedure               = withSourceProcedure<IJobSourceSchema>({
    source: $JobSource,
    schema: JobQuerySchema,
});
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_kvoq15f7lr9kirg03mytub2b = true;
