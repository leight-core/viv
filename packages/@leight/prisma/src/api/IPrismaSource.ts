import {type ISource} from '@leight/source';
import {type IRepository} from "./IRepository";

export interface IPrismaSource<TRepository extends IRepository> extends ISource<any, any> {
}
