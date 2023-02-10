import {z} from "zod";

export const CursorSchema = z.object({
    page: z.number().min(0),
    size: z.number().min(1),
});

export type ICursor = z.infer<typeof CursorSchema>;
