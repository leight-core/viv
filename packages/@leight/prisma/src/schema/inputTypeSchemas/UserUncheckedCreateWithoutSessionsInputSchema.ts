import type {Prisma}                                              from "@prisma/client";
import {z}                                                        from "zod";
import {AccountUncheckedCreateNestedManyWithoutUserInputSchema}   from "./AccountUncheckedCreateNestedManyWithoutUserInputSchema";
import {FileUncheckedCreateNestedManyWithoutUserInputSchema}      from "./FileUncheckedCreateNestedManyWithoutUserInputSchema";
import {JobUncheckedCreateNestedManyWithoutUserInputSchema}       from "./JobUncheckedCreateNestedManyWithoutUserInputSchema";
import {UserTokenUncheckedCreateNestedManyWithoutUserInputSchema} from "./UserTokenUncheckedCreateNestedManyWithoutUserInputSchema";

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
    id:            z.string().optional(),
    name:          z.string().optional().nullable(),
    email:         z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image:         z.string().optional().nullable(),
    accounts:      z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    UserToken:     z.lazy(() => UserTokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    File:          z.lazy(() => FileUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    Job:           z.lazy(() => JobUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export default UserUncheckedCreateWithoutSessionsInputSchema;
