import type {Prisma}                                              from "@prisma/client";
import {z}                                                        from "zod";
import {AccountUncheckedCreateNestedManyWithoutUserInputSchema}   from "./AccountUncheckedCreateNestedManyWithoutUserInputSchema";
import {JobUncheckedCreateNestedManyWithoutUserInputSchema}       from "./JobUncheckedCreateNestedManyWithoutUserInputSchema";
import {SessionUncheckedCreateNestedManyWithoutUserInputSchema}   from "./SessionUncheckedCreateNestedManyWithoutUserInputSchema";
import {UserTokenUncheckedCreateNestedManyWithoutUserInputSchema} from "./UserTokenUncheckedCreateNestedManyWithoutUserInputSchema";

export const UserUncheckedCreateWithoutFileInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutFileInput> = z.object({
    id:            z.string().optional(),
    name:          z.string().optional().nullable(),
    email:         z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image:         z.string().optional().nullable(),
    accounts:      z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    sessions:      z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    UserToken:     z.lazy(() => UserTokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    Job:           z.lazy(() => JobUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export default UserUncheckedCreateWithoutFileInputSchema;
