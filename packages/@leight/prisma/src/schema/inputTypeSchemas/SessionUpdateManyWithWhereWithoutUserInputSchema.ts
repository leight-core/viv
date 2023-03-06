import type {Prisma}                                          from "@prisma/client";
import {z}                                                    from "zod";
import {SessionScalarWhereInputSchema}                        from "./SessionScalarWhereInputSchema";
import {SessionUncheckedUpdateManyWithoutSessionsInputSchema} from "./SessionUncheckedUpdateManyWithoutSessionsInputSchema";
import {SessionUpdateManyMutationInputSchema}                 from "./SessionUpdateManyMutationInputSchema";

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
    where: z.lazy(() => SessionScalarWhereInputSchema),
    data:  z.union([
        z.lazy(() => SessionUpdateManyMutationInputSchema),
        z.lazy(() => SessionUncheckedUpdateManyWithoutSessionsInputSchema)
    ]),
}).strict();

export default SessionUpdateManyWithWhereWithoutUserInputSchema;
