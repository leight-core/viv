/**
	This is a file generated by MCP (managed code pattern) approach.
    
    So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {type IRepositorySchemaEx} from "@leight/source";
import {
	LabelWhereInputSchema,
	LabelWhereUniqueInputSchema,
	LabelOrderByWithRelationInputSchema
} from "@leight/prisma";

export type ILabelRepositorySchemaEx = IRepositorySchemaEx<
    typeof LabelWhereInputSchema,
    typeof LabelWhereUniqueInputSchema,
    typeof LabelOrderByWithRelationInputSchema
>;
export type ILabelRepositoryExType = ILabelRepositorySchemaEx["Type"];
export type ILabelRepositoryExSchema = ILabelRepositorySchemaEx["Schema"];

export const LabelRepositorySchemaEx: ILabelRepositoryExSchema = {
    WhereSchema:       LabelWhereInputSchema,
    WhereUniqueSchema: LabelWhereUniqueInputSchema,
    OrderBySchema:     LabelOrderByWithRelationInputSchema,
};
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_nxpxf7ommiy5lh0ycyuoahrs = true;