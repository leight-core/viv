import type {Prisma}                                              from "@prisma/client";
import {z}                                                        from "zod";
import {AccountUncheckedCreateNestedManyWithoutUserInputSchema}   from "./AccountUncheckedCreateNestedManyWithoutUserInputSchema";
import {FileUncheckedCreateNestedManyWithoutUserInputSchema}      from "./FileUncheckedCreateNestedManyWithoutUserInputSchema";
import {JobUncheckedCreateNestedManyWithoutUserInputSchema}       from "./JobUncheckedCreateNestedManyWithoutUserInputSchema";
import {SessionUncheckedCreateNestedManyWithoutUserInputSchema}   from "./SessionUncheckedCreateNestedManyWithoutUserInputSchema";
import {UserTokenUncheckedCreateNestedManyWithoutUserInputSchema} from "./UserTokenUncheckedCreateNestedManyWithoutUserInputSchema";

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
    id:            z.string().cuid().optional(),
    name:          z.string().optional().nullable(),
    email:         z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image:         z.string().optional().nullable(),
    accounts:      z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    sessions:      z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    UserToken:     z.lazy(() => UserTokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    File:          z.lazy(() => FileUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    Job:           z.lazy(() => JobUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export default UserUncheckedCreateInputSchema;
