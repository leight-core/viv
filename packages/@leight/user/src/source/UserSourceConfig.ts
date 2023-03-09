import {withSourceConfig} from "@leight/source";
import {z}                from "zod";
import {UserSchema}       from "../schema";

export const UserSourcedConfig = withSourceConfig({
    Schema: UserSchema,
    Query:  z.object({}),
});

export type IUserSourcedConfig = typeof UserSourcedConfig;
