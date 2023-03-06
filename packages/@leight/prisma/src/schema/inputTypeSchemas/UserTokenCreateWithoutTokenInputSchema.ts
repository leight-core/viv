import type {Prisma}                                    from "@prisma/client";
import {z}                                              from "zod";
import {UserCreateNestedOneWithoutUserTokenInputSchema} from "./UserCreateNestedOneWithoutUserTokenInputSchema";

export const UserTokenCreateWithoutTokenInputSchema: z.ZodType<Prisma.UserTokenCreateWithoutTokenInput> = z.object({
    id:   z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutUserTokenInputSchema),
}).strict();

export default UserTokenCreateWithoutTokenInputSchema;
