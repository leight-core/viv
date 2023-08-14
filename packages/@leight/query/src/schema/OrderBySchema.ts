import {z}           from "@leight/utils";
import {OrderSchema} from "./OrderSchema";

export const OrderBySchema = z.record(OrderSchema);
export type IOrderBySchema = typeof OrderBySchema;
export type IOrderBy = z.infer<IOrderBySchema>;
