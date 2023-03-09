import {type Interface}          from "@leight/source";
import {type IUserSourcedConfig} from "./UserSourceConfig";

export interface IUserSource extends Interface<IUserSourcedConfig> {
}

export const $UserSource = Symbol.for("@leight/user/IUserSource");
