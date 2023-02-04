import {type ISource} from "@leight/source";
import {type IJobSourceConfig} from "./IJobSourceConfig";

export interface IJobSource extends ISource<IJobSourceConfig> {
}

export const $JobSource = Symbol.for('@leight/job/JobSource');
