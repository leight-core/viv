import type {Prisma}                                   from "@prisma/client";
import {z}                                             from "zod";
import {AccountCreateNestedManyWithoutUserInputSchema} from "./AccountCreateNestedManyWithoutUserInputSchema";
import {FileCreateNestedManyWithoutUserInputSchema}    from "./FileCreateNestedManyWithoutUserInputSchema";
import {JobCreateNestedManyWithoutUserInputSchema}     from "./JobCreateNestedManyWithoutUserInputSchema";
import {SessionCreateNestedManyWithoutUserInputSchema} from "./SessionCreateNestedManyWithoutUserInputSchema";

export const UserCreateWithoutUserTokenInputSchema: z.ZodType<Prisma.UserCreateWithoutUserTokenInput> = z.object({
    id:            z.string().optional(),
    name:          z.string().optional().nullable(),
    email:         z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image:         z.string().optional().nullable(),
    accounts:      z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
    sessions:      z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
    File:          z.lazy(() => FileCreateNestedManyWithoutUserInputSchema).optional(),
    Job:           z.lazy(() => JobCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export default UserCreateWithoutUserTokenInputSchema;
