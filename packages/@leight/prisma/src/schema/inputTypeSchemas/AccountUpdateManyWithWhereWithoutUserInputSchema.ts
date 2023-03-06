import type {Prisma}                                          from "@prisma/client";
import {z}                                                    from "zod";
import {AccountScalarWhereInputSchema}                        from "./AccountScalarWhereInputSchema";
import {AccountUncheckedUpdateManyWithoutAccountsInputSchema} from "./AccountUncheckedUpdateManyWithoutAccountsInputSchema";
import {AccountUpdateManyMutationInputSchema}                 from "./AccountUpdateManyMutationInputSchema";

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
    where: z.lazy(() => AccountScalarWhereInputSchema),
    data:  z.union([
        z.lazy(() => AccountUpdateManyMutationInputSchema),
        z.lazy(() => AccountUncheckedUpdateManyWithoutAccountsInputSchema)
    ]),
}).strict();

export default AccountUpdateManyWithWhereWithoutUserInputSchema;
