import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {TokenCreateNestedOneWithoutUserTokenInputSchema} from "./TokenCreateNestedOneWithoutUserTokenInputSchema";

export const UserTokenCreateWithoutUserInputSchema: z.ZodType<Prisma.UserTokenCreateWithoutUserInput> = z.object({
    id:    z.string().optional(),
    token: z.lazy(() => TokenCreateNestedOneWithoutUserTokenInputSchema),
}).strict();

export default UserTokenCreateWithoutUserInputSchema;