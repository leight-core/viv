import {
    FilterSchema,
    WithIdentitySchema
}          from "@leight/query";
import {z} from "@leight/utils";

export const PatchSchema = z.object({
    patch:  WithIdentitySchema,
    filter: FilterSchema,
});
export type IPatchSchema = typeof PatchSchema;
export type IPatch = z.infer<IPatchSchema>;
