import {z} from "zod";
import {
    type AccountPartialWithRelations,
    AccountPartialWithRelationsSchema,
    type AccountWithRelations,
    AccountWithRelationsSchema
}          from "./AccountSchema";
import {
    type FilePartialWithRelations,
    FilePartialWithRelationsSchema,
    type FileWithRelations,
    FileWithRelationsSchema
}          from "./FileSchema";
import {
    type JobPartialWithRelations,
    JobPartialWithRelationsSchema,
    type JobWithRelations,
    JobWithRelationsSchema
}          from "./JobSchema";
import {
    type SessionPartialWithRelations,
    SessionPartialWithRelationsSchema,
    type SessionWithRelations,
    SessionWithRelationsSchema
}          from "./SessionSchema";
import {
    type UserTokenPartialWithRelations,
    UserTokenPartialWithRelationsSchema,
    type UserTokenWithRelations,
    UserTokenWithRelationsSchema
}          from "./UserTokenSchema";

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
    id:            z.string().cuid(),
    name:          z.string().nullish(),
    email:         z.string().nullish(),
    emailVerified: z.coerce.date().nullish(),
    image:         z.string().nullish(),
});

export type User = z.infer<typeof UserSchema>

// USER PARTIAL SCHEMA
//------------------------------------------------------

export const UserPartialSchema = UserSchema.partial();

export type UserPartial = z.infer<typeof UserPartialSchema>

// USER RELATION SCHEMA
//------------------------------------------------------

export type UserRelations = {
    accounts: AccountWithRelations[];
    sessions: SessionWithRelations[];
    UserToken: UserTokenWithRelations[];
    File: FileWithRelations[];
    Job: JobWithRelations[];
};

export type UserWithRelations =
    z.infer<typeof UserSchema>
    & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
    accounts:  z.lazy(() => AccountWithRelationsSchema).array(),
    sessions:  z.lazy(() => SessionWithRelationsSchema).array(),
    UserToken: z.lazy(() => UserTokenWithRelationsSchema).array(),
    File:      z.lazy(() => FileWithRelationsSchema).array(),
    Job:       z.lazy(() => JobWithRelationsSchema).array(),
}));

// USER PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type UserPartialRelations = {
    accounts?: AccountPartialWithRelations[];
    sessions?: SessionPartialWithRelations[];
    UserToken?: UserTokenPartialWithRelations[];
    File?: FilePartialWithRelations[];
    Job?: JobPartialWithRelations[];
};

export type UserPartialWithRelations =
    z.infer<typeof UserPartialSchema>
    & UserPartialRelations

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> = UserPartialSchema.merge(z.object({
    accounts:  z.lazy(() => AccountPartialWithRelationsSchema).array(),
    sessions:  z.lazy(() => SessionPartialWithRelationsSchema).array(),
    UserToken: z.lazy(() => UserTokenPartialWithRelationsSchema).array(),
    File:      z.lazy(() => FilePartialWithRelationsSchema).array(),
    Job:       z.lazy(() => JobPartialWithRelationsSchema).array(),
})).partial();

export default UserSchema;
