import type {Prisma}                                             from "@prisma/client";
import {z}                                                       from "zod";
import {UserTokenScalarWhereInputSchema}                         from "./UserTokenScalarWhereInputSchema";
import {UserTokenUncheckedUpdateManyWithoutUserTokenInputSchema} from "./UserTokenUncheckedUpdateManyWithoutUserTokenInputSchema";
import {UserTokenUpdateManyMutationInputSchema}                  from "./UserTokenUpdateManyMutationInputSchema";

export const UserTokenUpdateManyWithWhereWithoutTokenInputSchema: z.ZodType<Prisma.UserTokenUpdateManyWithWhereWithoutTokenInput> = z.object({
    where: z.lazy(() => UserTokenScalarWhereInputSchema),
    data:  z.union([
        z.lazy(() => UserTokenUpdateManyMutationInputSchema),
        z.lazy(() => UserTokenUncheckedUpdateManyWithoutUserTokenInputSchema)
    ]),
}).strict();

export default UserTokenUpdateManyWithWhereWithoutTokenInputSchema;
