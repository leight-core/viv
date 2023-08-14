import {z} from "@leight/utils";

export const OrderSchema = z.enum(["asc", "desc"]);
export type IOrderSchema = typeof OrderSchema;
export type IOrder = z.infer<IOrderSchema>;
