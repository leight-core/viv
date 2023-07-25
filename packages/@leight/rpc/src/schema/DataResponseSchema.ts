import {z} from "@leight/utils";

export const DataResponseSchema = z.object({
    data: z.object({}).passthrough().nullish(),
});
