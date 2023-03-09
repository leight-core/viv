import {type Interface}        from "@leight/source";
import {type IJobSourceConfig} from "./IJobSourceConfig";

export interface IJobSource extends Interface<IJobSourceConfig> {
}

export const $JobSource = Symbol.for("@leight/job/JobSource");
