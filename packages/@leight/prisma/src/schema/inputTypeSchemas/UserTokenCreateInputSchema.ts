import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {TokenCreateNestedOneWithoutUserTokenInputSchema} from "./TokenCreateNestedOneWithoutUserTokenInputSchema";
import {UserCreateNestedOneWithoutUserTokenInputSchema}  from "./UserCreateNestedOneWithoutUserTokenInputSchema";

export const UserTokenCreateInputSchema: z.ZodType<Prisma.UserTokenCreateInput> = z.object({
    id:    z.string().cuid().optional(),
    user:  z.lazy(() => UserCreateNestedOneWithoutUserTokenInputSchema),
    token: z.lazy(() => TokenCreateNestedOneWithoutUserTokenInputSchema),
}).strict();

export default UserTokenCreateInputSchema;
