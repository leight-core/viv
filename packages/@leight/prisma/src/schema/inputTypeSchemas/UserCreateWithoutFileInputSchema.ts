import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {AccountCreateNestedManyWithoutUserInputSchema}   from "./AccountCreateNestedManyWithoutUserInputSchema";
import {JobCreateNestedManyWithoutUserInputSchema}       from "./JobCreateNestedManyWithoutUserInputSchema";
import {SessionCreateNestedManyWithoutUserInputSchema}   from "./SessionCreateNestedManyWithoutUserInputSchema";
import {UserTokenCreateNestedManyWithoutUserInputSchema} from "./UserTokenCreateNestedManyWithoutUserInputSchema";

export const UserCreateWithoutFileInputSchema: z.ZodType<Prisma.UserCreateWithoutFileInput> = z.object({
    id:            z.string().optional(),
    name:          z.string().optional().nullable(),
    email:         z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image:         z.string().optional().nullable(),
    accounts:      z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
    sessions:      z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
    UserToken:     z.lazy(() => UserTokenCreateNestedManyWithoutUserInputSchema).optional(),
    Job:           z.lazy(() => JobCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export default UserCreateWithoutFileInputSchema;