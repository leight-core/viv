import type {Prisma}                                             from "@prisma/client";
import {z}                                                       from "zod";
import {UserTokenScalarWhereInputSchema}                         from "./UserTokenScalarWhereInputSchema";
import {UserTokenUncheckedUpdateManyWithoutUserTokenInputSchema} from "./UserTokenUncheckedUpdateManyWithoutUserTokenInputSchema";
import {UserTokenUpdateManyMutationInputSchema}                  from "./UserTokenUpdateManyMutationInputSchema";

export const UserTokenUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserTokenUpdateManyWithWhereWithoutUserInput> = z.object({
    where: z.lazy(() => UserTokenScalarWhereInputSchema),
    data:  z.union([
        z.lazy(() => UserTokenUpdateManyMutationInputSchema),
        z.lazy(() => UserTokenUncheckedUpdateManyWithoutUserTokenInputSchema)
    ]),
}).strict();

export default UserTokenUpdateManyWithWhereWithoutUserInputSchema;
