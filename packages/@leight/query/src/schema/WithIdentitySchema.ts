import {z} from "@leight/utils";

export const WithIdentitySchema = z.object({
    id: z.string().nonempty({message: "Non-empty"}),
});
export type IWithIdentitySchema = typeof WithIdentitySchema;
export type IWithIdentity = z.infer<IWithIdentitySchema>;
