import type {Prisma}                       from "@prisma/client";
import {z}                                 from "zod";
import {AccountListRelationFilterSchema}   from "./AccountListRelationFilterSchema";
import {DateTimeNullableFilterSchema}      from "./DateTimeNullableFilterSchema";
import {FileListRelationFilterSchema}      from "./FileListRelationFilterSchema";
import {JobListRelationFilterSchema}       from "./JobListRelationFilterSchema";
import {SessionListRelationFilterSchema}   from "./SessionListRelationFilterSchema";
import {StringFilterSchema}                from "./StringFilterSchema";
import {StringNullableFilterSchema}        from "./StringNullableFilterSchema";
import {UserTokenListRelationFilterSchema} from "./UserTokenListRelationFilterSchema";

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
    AND:           z.union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array()
    ]).optional(),
    OR:            z.lazy(() => UserWhereInputSchema).array().optional(),
    NOT:           z.union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array()
    ]).optional(),
    id:            z.union([
        z.lazy(() => StringFilterSchema),
        z.string()
    ]).optional(),
    name:          z.union([
        z.lazy(() => StringNullableFilterSchema),
        z.string()
    ]).optional().nullable(),
    email:         z.union([
        z.lazy(() => StringNullableFilterSchema),
        z.string()
    ]).optional().nullable(),
    emailVerified: z.union([
        z.lazy(() => DateTimeNullableFilterSchema),
        z.coerce.date()
    ]).optional().nullable(),
    image:         z.union([
        z.lazy(() => StringNullableFilterSchema),
        z.string()
    ]).optional().nullable(),
    accounts:      z.lazy(() => AccountListRelationFilterSchema).optional(),
    sessions:      z.lazy(() => SessionListRelationFilterSchema).optional(),
    UserToken:     z.lazy(() => UserTokenListRelationFilterSchema).optional(),
    File:          z.lazy(() => FileListRelationFilterSchema).optional(),
    Job:           z.lazy(() => JobListRelationFilterSchema).optional()
}).strict();

export default UserWhereInputSchema;
