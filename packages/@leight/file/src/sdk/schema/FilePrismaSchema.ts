/**
	This is a file generated by MCP (managed code pattern) approach.
    
    So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {
	withSourceSchemaEx,
	type ISourceSchemaExType
} from "@leight/source";
import {
	FileWhereInputSchema,
	FileWhereUniqueInputSchema,
	FileOrderByWithRelationInputSchema
} from "@leight/prisma";

export type IFilePrismaSchemaType = ISourceSchemaExType.of<typeof FilePrismaSchema>;

export const FilePrismaSchema = withSourceSchemaEx({
    WhereSchema:       FileWhereInputSchema,
    WhereUniqueSchema: FileWhereUniqueInputSchema,
    OrderBySchema:     FileOrderByWithRelationInputSchema,
});
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_yks4wn7lzlqnsy8nsli7vj39 = true;