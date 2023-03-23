/**
 This is a file generated by MCP (managed code pattern) approach.

 So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {
    type IContainer,
    ServiceContext
}                               from "@leight/container";
import {type ISource}           from "@leight/source";
import {type IUserSourceEx}     from "../api";
import {type IUserSourceSchema} from "./SourceSchema";

export interface IUserSource extends ISource<IUserSourceSchema>, IUserSourceEx {
}

export const $UserSource       = Symbol.for("@leight/user/IUserSource");
export const UserSourceContext = (container: IContainer) => new ServiceContext<IUserSource>(container, $UserSource);
