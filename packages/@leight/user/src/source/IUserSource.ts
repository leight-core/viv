import {type ISource}           from "@leight/source";
import {type IUserSourceSchema} from "./IUserSourceSchema";

export interface IUserSource extends ISource<IUserSourceSchema> {
}

export const $UserSource = Symbol.for("@leight/user/IUserSource");
