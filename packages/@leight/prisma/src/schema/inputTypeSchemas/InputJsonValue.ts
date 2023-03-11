import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const InputJsonValue: z.ZodType<Prisma.InputJsonValue> = z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.lazy(() => z.array(InputJsonValue.nullable())),
    z.lazy(() => z.record(InputJsonValue.nullable())),
]);

export type InputJsonValueType = z.infer<typeof InputJsonValue>;

export default InputJsonValue;
