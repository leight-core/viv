import {Schema} from "@leight/prisma";
import {type z} from "zod";

export const UserSchema = Schema.UserSchema;

export type IUserSchema = typeof UserSchema;

export type IUser = z.infer<IUserSchema>;
